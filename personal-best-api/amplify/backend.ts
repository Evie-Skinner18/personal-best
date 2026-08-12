import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { RdsConstruct } from './storage/rds-construct';
import { FieldLogLevel } from 'aws-cdk-lib/aws-appsync';
import { IamConstruct } from './auth/iam-construct';
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { CfnFunction } from 'aws-cdk-lib/aws-lambda';
import { getPersonalBests } from './functions/get-personal-bests';
import { createPersonalBest } from './functions/create-personal-best';
import { getExercises } from './functions/get-exercises';
import { createExercise } from './functions/create-exercise';
import { ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { LambdaLayerConstruct } from './functions/lambda-layer-construct';
import { seedDb } from './functions/seed-db';


/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  seedDb,
  getPersonalBests,
  createPersonalBest,
  getExercises,
  createExercise
});


const personalBestDeploymentStack = backend.createStack('RdsStack');

const rdsCertificateLambdaLayer = new LambdaLayerConstruct(personalBestDeploymentStack, 'LambdaLayer', {
  name: 'rds-certificate-layer',
  description: 'Lambda layer to make the TLS certificate available to all lambdas connecting to the DB'
});

// yuck want to set the layer in defineFunction() ideally
// attach layer to each lambda so it can contact the DB
const seedDbLambda = backend.seedDb.resources.lambda;
const getPersonalBestsLambda = backend.getPersonalBests.resources.lambda;
const createExerciseLambda = backend.createExercise.resources.lambda;

// to-do abstract out into a CfnFunctions file
const seedDbCfnFunction = seedDbLambda.node.defaultChild as CfnFunction;
const getPersonalBestsCfnFunction = getPersonalBestsLambda.node.defaultChild as CfnFunction;
const createExerciseCfnFunction = createExerciseLambda.node.defaultChild as CfnFunction;

seedDbCfnFunction.layers = [ rdsCertificateLambdaLayer.layer.layerVersionArn ];
getPersonalBestsCfnFunction.layers = [ rdsCertificateLambdaLayer.layer.layerVersionArn ];
createExerciseCfnFunction.layers = [ rdsCertificateLambdaLayer.layer.layerVersionArn ];

const appSyncIamRole = new IamConstruct(personalBestDeploymentStack, 'IamRole', {
  environmentName: backend.auth.resources.userPool.node.tryGetContext('amplify-environment-name') || 'dev'
});

// add logging to appsync
const appsyncGraphQlApi = backend.data.resources.cfnResources.cfnGraphqlApi;
appsyncGraphQlApi.logConfig = {
  fieldLogLevel: FieldLogLevel.INFO,
  cloudWatchLogsRoleArn: appSyncIamRole.role.roleArn,
};

// Add RDS database
const rdsConstruct = new RdsConstruct(personalBestDeploymentStack, 'Database', {
  environmentName: backend.auth.resources.userPool.node.tryGetContext('amplify-environment-name') || 'dev'
});


// put all lambdas inside the same VPC as the DB
// Reference the existing VPC that was provisioned with the DB
const vpc = Vpc.fromVpcAttributes(backend.createExercise.resources.lambda.stack, 'PersonalBestVpc', {
  vpcId: rdsConstruct.vpc.vpcId,
  availabilityZones: rdsConstruct.vpc.availabilityZones,
  privateSubnetIds: rdsConstruct.vpc.privateSubnets.map(subnet => subnet.subnetId),
  publicSubnetIds: rdsConstruct.vpc.publicSubnets.map(subnet => subnet.subnetId),
  isolatedSubnetIds: rdsConstruct.vpc.isolatedSubnets.map(subnet => subnet.subnetId),
});

// Apply VPC configuration via CDK escape hatch
const dbSecurityGroup = rdsConstruct.instance.connections.securityGroups[0];

const lambdaSecurityGroup = new SecurityGroup(personalBestDeploymentStack, 'LambdaSecurityGroup', {
      vpc: vpc,
      description: 'Security group to allo wthe lmbdas to interact with the Personal Best RDS instance',
      allowAllOutbound: true,
    });


    // to-do attach all other lambdas to VPC
    // do we want this as a foreach or is it better to be DAMP?
seedDbCfnFunction.vpcConfig = {
  subnetIds: vpc.privateSubnets.map(s => s.subnetId),
  securityGroupIds: [lambdaSecurityGroup.securityGroupId],
};
getPersonalBestsCfnFunction.vpcConfig = {
  subnetIds: vpc.privateSubnets.map(s => s.subnetId),
  securityGroupIds: [lambdaSecurityGroup.securityGroupId],
};
createExerciseCfnFunction.vpcConfig = {
  subnetIds: vpc.privateSubnets.map(s => s.subnetId),
  securityGroupIds: [lambdaSecurityGroup.securityGroupId],
};

// allow lambda to operate in a VPC
const vpcManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaVPCAccessExecutionRole');
seedDbLambda.role?.addManagedPolicy(vpcManagedPolicy);
createExerciseLambda.role?.addManagedPolicy(vpcManagedPolicy);
getPersonalBestsLambda.role?.addManagedPolicy(vpcManagedPolicy);

dbSecurityGroup.addIngressRule(
  lambdaSecurityGroup,
  Port.tcp(5432),
  'Allow PostgreSQL connections from Lambda functions in the same VPC'
);


// Add database connection details to Lambda function environment
backend.seedDb.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.seedDb.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.seedDb.addEnvironment('DATABASE_NAME', 'personalbest');
backend.seedDb.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);
backend.seedDb.addEnvironment('DATABASE_SSL_MODE', 'require');
backend.seedDb.addEnvironment('DATABASE_SSL_CA_PATH', '/opt/eu-west-1-bundle.pem');

backend.getPersonalBests.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.getPersonalBests.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.getPersonalBests.addEnvironment('DATABASE_NAME', 'personalbest');
backend.getPersonalBests.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);
backend.getPersonalBests.addEnvironment('DATABASE_SSL_MODE', 'require');
backend.getPersonalBests.addEnvironment('DATABASE_SSL_CA_PATH', '/opt/eu-west-1-bundle.pem');

backend.createPersonalBest.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.createPersonalBest.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.createPersonalBest.addEnvironment('DATABASE_NAME', 'personalbest');
backend.createPersonalBest.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);
backend.createPersonalBest.addEnvironment('DATABASE_SSL_MODE', 'require');
backend.createPersonalBest.addEnvironment('DATABASE_SSL_CA_PATH', '/opt/eu-west-1-bundle.pem');


backend.getExercises.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.getExercises.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.getExercises.addEnvironment('DATABASE_NAME', 'personalbest');
backend.getExercises.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);
backend.getExercises.addEnvironment('DATABASE_SSL_MODE', 'require');
backend.getExercises.addEnvironment('DATABASE_SSL_CA_PATH', '/opt/eu-west-1-bundle.pem');


backend.createExercise.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.createExercise.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.createExercise.addEnvironment('DATABASE_NAME', 'personalbest');
backend.createExercise.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);
backend.createExercise.addEnvironment('DATABASE_SSL_MODE', 'require');
backend.createExercise.addEnvironment('DATABASE_SSL_CA_PATH', '/opt/eu-west-1-bundle.pem');



// Grant the Lambda function access to the database secret
rdsConstruct.secret.grantRead(seedDbLambda)
rdsConstruct.secret.grantRead(getPersonalBestsLambda);
rdsConstruct.secret.grantRead(backend.createPersonalBest.resources.lambda);
rdsConstruct.secret.grantRead(backend.getExercises.resources.lambda);
rdsConstruct.secret.grantRead(createExerciseLambda);


// tell the CDK to create the DB first as the lambdas depend on that
seedDbLambda.node.addDependency(rdsConstruct.instance);
getPersonalBestsLambda.node.addDependency(rdsConstruct.instance);
backend.createPersonalBest.resources.lambda.node.addDependency(rdsConstruct.instance);
backend.getExercises.resources.lambda.node.addDependency(rdsConstruct.instance);
createExerciseLambda.node.addDependency(rdsConstruct.instance);


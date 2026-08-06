import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { RdsConstruct } from './storage/rds-construct';
import { FieldLogLevel } from 'aws-cdk-lib/aws-appsync';
import { IamConstruct } from './auth/iam-construct';
import { Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { CfnFunction } from 'aws-cdk-lib/aws-lambda';
import { getPersonalBests } from './functions/get-personal-bests';
import { createPersonalBest } from './functions/create-personal-best';
import { getExercises } from './functions/get-exercises';
import { createExercise } from './functions/create-exercise';
import { ManagedPolicy } from 'aws-cdk-lib/aws-iam';



/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  getPersonalBests,
  createPersonalBest,
  getExercises,
  createExercise
});

const personalBestDeploymentStack = backend.createStack('RdsStack');

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
// Reference an existing VPC
const vpc = Vpc.fromVpcAttributes(backend.createExercise.resources.lambda.stack, 'PersonalBestVpc', {
  vpcId: rdsConstruct.vpc.vpcId,
  availabilityZones: rdsConstruct.vpc.availabilityZones,
  privateSubnetIds: rdsConstruct.vpc.privateSubnets.map(subnet => subnet.subnetId),
  publicSubnetIds: rdsConstruct.vpc.publicSubnets.map(subnet => subnet.subnetId),
  isolatedSubnetIds: rdsConstruct.vpc.isolatedSubnets.map(subnet => subnet.subnetId),
});

// Apply VPC configuration via CDK escape hatch
const createExerciseLambda = backend.createExercise.resources.lambda;
const createExerciseCfnFunction = createExerciseLambda.node.defaultChild as CfnFunction;
const dbSecurityGroup = rdsConstruct.instance.connections.securityGroups[0];

const lambdaSecurityGroup = new SecurityGroup(personalBestDeploymentStack, 'LambdaSecurityGroup', {
      vpc: vpc,
      description: 'Security group to allo wthe lmbdas to interact with the Personal Best RDS instance',
      allowAllOutbound: true,
    });


createExerciseCfnFunction.vpcConfig = {
  subnetIds: vpc.privateSubnets.map(s => s.subnetId),
  securityGroupIds: [lambdaSecurityGroup.securityGroupId],
};

// allow lambda to operate in a VPC
const vpcManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaVPCAccessExecutionRole');
createExerciseLambda.role?.addManagedPolicy(vpcManagedPolicy);

// Allow inbound connections from Lambda functions (in same VPC)
dbSecurityGroup.addIngressRule(
  lambdaSecurityGroup,
  Port.tcp(5432),
  'Allow PostgreSQL connections from Lambda functions in the same VPC'
);


// Add database connection details to Lambda function environment
backend.getPersonalBests.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.getPersonalBests.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.getPersonalBests.addEnvironment('DATABASE_NAME', 'personalbest');
backend.getPersonalBests.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);

backend.createPersonalBest.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.createPersonalBest.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.createPersonalBest.addEnvironment('DATABASE_NAME', 'personalbest');
backend.createPersonalBest.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);

backend.getExercises.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.getExercises.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.getExercises.addEnvironment('DATABASE_NAME', 'personalbest');
backend.getExercises.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);

backend.createExercise.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.createExercise.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.createExercise.addEnvironment('DATABASE_NAME', 'personalbest');
backend.createExercise.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);


// Grant the Lambda function access to the database secret
rdsConstruct.secret.grantRead(backend.getPersonalBests.resources.lambda);
rdsConstruct.secret.grantRead(backend.createPersonalBest.resources.lambda);
rdsConstruct.secret.grantRead(backend.getExercises.resources.lambda);
rdsConstruct.secret.grantRead(backend.createExercise.resources.lambda);


// Allow Lambda to connect to RDS (they're in the same VPC)
backend.getPersonalBests.resources.lambda.node.addDependency(rdsConstruct.instance);
backend.createPersonalBest.resources.lambda.node.addDependency(rdsConstruct.instance);
backend.getExercises.resources.lambda.node.addDependency(rdsConstruct.instance);
backend.createExercise.resources.lambda.node.addDependency(rdsConstruct.instance);


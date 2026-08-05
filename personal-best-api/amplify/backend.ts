import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getPersonalBests } from './functions/get-personal-bests';
import { RdsConstruct } from './storage/rds-construct';
import { createPersonalBest } from './functions/create-personal-best';
import { getExercises } from './functions/get-exercises';
import { FieldLogLevel } from 'aws-cdk-lib/aws-appsync';
import { IamConstruct } from './auth/iam-construct';
import { createExercise } from './functions/create-exercise';

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

const iamRole = new IamConstruct(personalBestDeploymentStack, 'IamRole', {
  environmentName: backend.auth.resources.userPool.node.tryGetContext('amplify-environment-name') || 'dev'
});

// add logging to appsync
const appsyncGraphQlApi = backend.data.resources.cfnResources.cfnGraphqlApi;
appsyncGraphQlApi.logConfig = {
  fieldLogLevel: FieldLogLevel.INFO,
  cloudWatchLogsRoleArn: iamRole.role.roleArn,
};

// Add RDS database
const rdsConstruct = new RdsConstruct(personalBestDeploymentStack, 'Database', {
  environmentName: backend.auth.resources.userPool.node.tryGetContext('amplify-environment-name') || 'dev'
});

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


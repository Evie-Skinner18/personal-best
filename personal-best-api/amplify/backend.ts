import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getPersonalBests } from './functions/get-personal-bests';
import { RdsConstruct } from './storage/rds-construct';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  getPersonalBests
});

// Add RDS database
const rdsConstruct = new RdsConstruct(backend.createStack("RdsStack"), "Database", {
  environmentName: backend.auth.resources.userPool.node.tryGetContext('amplify-environment-name') || 'dev'
});

// Add database connection details to Lambda function environment
backend.getPersonalBests.addEnvironment('DATABASE_HOST', rdsConstruct.instance.instanceEndpoint.hostname);
backend.getPersonalBests.addEnvironment('DATABASE_PORT', rdsConstruct.instance.instanceEndpoint.port.toString());
backend.getPersonalBests.addEnvironment('DATABASE_NAME', 'personalbest');
backend.getPersonalBests.addEnvironment('DATABASE_SECRET_ARN', rdsConstruct.secret.secretArn);

// Grant the Lambda function access to the database secret
rdsConstruct.secret.grantRead(backend.getPersonalBests.resources.lambda);

// Allow Lambda to connect to RDS (they're in the same VPC)
backend.getPersonalBests.resources.lambda.node.addDependency(rdsConstruct.instance);

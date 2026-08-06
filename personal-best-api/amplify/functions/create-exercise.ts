import { defineFunction } from '@aws-amplify/backend';
import { Function } from 'aws-cdk-lib/aws-lambda';


export const createExercise = defineFunction({
  name: 'create-exercise',
  entry: './create-exercise-handler.ts',
  timeoutSeconds: 15
});

// help
// export const lambda = new Function(createExercise.stack, 'CreateExerciseLambda', {
//   runtime: createExercise.runtime,
//   handler: createExercise.handler,
//   code: createExercise.code,
//   vpc: createExercise.vpc,
//   environment: createExercise.environment,
//   timeout: createExercise.timeout,
//   memorySize: createExercise.memorySize,
//   logRetention: createExercise.logRetention,
//   tracing: createExercise.tracing,
//   layers: createExercise.layers,
//   securityGroups: createExercise.securityGroups,
//   filesystem: createExercise.filesystem,
// });



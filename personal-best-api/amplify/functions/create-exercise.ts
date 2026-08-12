import { defineFunction } from '@aws-amplify/backend';


export const createExercise = defineFunction({
  name: 'create-exercise',
  entry: './create-exercise-handler.ts',
  timeoutSeconds: 15,
});




import { defineFunction } from '@aws-amplify/backend';

export const getExercises = defineFunction({
  name: 'get-exercises',
  entry: './get-exercises-handler.ts',
});
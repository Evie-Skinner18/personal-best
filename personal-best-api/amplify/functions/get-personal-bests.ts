import { defineFunction } from '@aws-amplify/backend';

export const getPersonalBests = defineFunction({
  name: 'get-personal-bests',
  entry: './get-personal-bests-handler.ts',
  timeoutSeconds: 15
});
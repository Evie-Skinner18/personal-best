import { defineFunction } from '@aws-amplify/backend';

export const getPersonalBests = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'get-personal-bests',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './get-personal-bests-handler.ts'
});
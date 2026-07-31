import { defineFunction } from '@aws-amplify/backend';

export const createPersonalBest = defineFunction({
  name: 'create-personal-best',
  entry: './create-personal-best-handler.ts',
});
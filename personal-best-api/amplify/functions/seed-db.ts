import { defineFunction } from '@aws-amplify/backend';


export const seedDb = defineFunction({
  name: 'seed-db',
  entry: './seed-db-handler.ts',
  timeoutSeconds: 15,
});




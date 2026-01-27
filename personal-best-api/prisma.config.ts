import 'dotenv/config'
import { defineConfig } from "prisma/config";
import { environment } from './environment';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { 
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: { 
    url: environment.DB_CONNECTION_STRING 
  }
});
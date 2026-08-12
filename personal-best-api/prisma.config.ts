import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  migrations: {
    path: "src/prisma/migrations",
    seed: "tsx src/prisma/seed.ts",
  },
  datasource: {
    // help migrate works with conn string hard coded but not loaded from an env. is it to do with % encoding? the local
    // conn string worked without % encoding
    url: process.env.DB_CONNECTION_STRING
  }
});
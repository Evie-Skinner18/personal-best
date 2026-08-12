export type Environment = {
  DB_CONNECTION_STRING: string;
  DATABASE_SECRET_ARN: string;
  DATABASE_HOST: string;
  DATABASE_PORT: string;
  DATABASE_NAME: string;
  LOCAL_DB_CONNECTION_STRING: string;
};
// to-do process.env doesn't actually ahve these
export const environment = process.env as Environment;
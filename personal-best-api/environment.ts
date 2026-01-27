type Environment = {
  DB_CONNECTION_STRING: string;
};
export const environment = process.env as Environment;
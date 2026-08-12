import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/prisma/generated/client";
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { readFileSync } from "node:fs";

// Global variable to reuse database connection across Lambda invocations
let prisma: PrismaClient | null = null;
let secretsClient: SecretsManagerClient | null = null;

interface DatabaseCredentials {
  username: string;
  password: string;
}

async function  getDatabaseCredentials(): Promise<DatabaseCredentials> {
  if (!secretsClient) {
    secretsClient = new SecretsManagerClient({
      region: process.env.AWS_REGION || 'eu-west-1'
    });
  }

  const secretArn = process.env.DATABASE_SECRET_ARN;
  if (!secretArn) {
    throw new Error('DATABASE_SECRET_ARN environment variable is required');
  }

  try {
    const command = new GetSecretValueCommand({ SecretId: secretArn });
    const response = await secretsClient.send(command);
    
    if (!response.SecretString) {
      throw new Error('No secret string found in response');
    }

    const rawCredentials = JSON.parse(response.SecretString) as DatabaseCredentials;
    const uriEncodedCredentials: DatabaseCredentials = {
      password: encodeURIComponent(rawCredentials.password),
      username: encodeURIComponent(rawCredentials.username)
    }

    return uriEncodedCredentials;
  } catch (error) {
    console.error('Error retrieving database credentials:', error);
    throw new Error('Failed to retrieve database credentials');
  }
}

async function createDatabaseUrl(): Promise<string> {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT || '5432';
  const database = process.env.DATABASE_NAME || 'personalbest';

  if (!host) {
    throw new Error('DATABASE_HOST environment variable is required');
  }

  const credentials = await getDatabaseCredentials();
  
  const connectionString = `postgresql://${credentials.username}:${credentials.password}@${host}:${port}/${database}?sslmode=no-verify`;
  return connectionString;
}

/**
 * Get Prisma client instance (singleton pattern for Lambda)
 */
export async function getPrismaClient(): Promise<PrismaClient> {
  // it will do this only if there isn't already a PrismaClient instantiated
  // when you invoke getPrismaClient() from each lambda you are not newing up another one
  if (!prisma) {
    const databaseUrl = await createDatabaseUrl();
    const certFilePath = process.env.DATABASE_SSL_CA_PATH? process.env.DATABASE_SSL_CA_PATH : '/opt/eu-west-1-bundle.pem';
    const adapter = new PrismaPg({ 
      connectionString: databaseUrl, 
      ssl: { 
        ca: readFileSync(certFilePath, { encoding: 'utf-8' }), 
        requestCert: true, 
        rejectUnauthorized: true 
      } 
    });
    
    prisma = new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
    });

    await prisma.$connect();
  }

  return prisma;
}

// export async function seed()

export async function closePrismaConnection(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
  }
}

export async function testDatabaseConnection(): Promise<boolean> {
  try {
    const client = await getPrismaClient();
    await client.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}
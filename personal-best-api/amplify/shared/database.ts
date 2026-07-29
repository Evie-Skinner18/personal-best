import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

// Global variable to reuse database connection across Lambda invocations
let prisma: PrismaClient | null = null;
let secretsClient: SecretsManagerClient | null = null;

interface DatabaseCredentials {
  username: string;
  password: string;
}

/**
 * Get database credentials from AWS Secrets Manager
 */
async function getDatabaseCredentials(): Promise<DatabaseCredentials> {
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

    return JSON.parse(response.SecretString) as DatabaseCredentials;
  } catch (error) {
    console.error('Error retrieving database credentials:', error);
    throw new Error('Failed to retrieve database credentials');
  }
}

/**
 * Create database connection URL from environment variables and credentials
 */
async function createDatabaseUrl(): Promise<string> {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT || '5432';
  const database = process.env.DATABASE_NAME || 'personalbest';

  if (!host) {
    throw new Error('DATABASE_HOST environment variable is required');
  }

  const credentials = await getDatabaseCredentials();
  
  return `postgresql://${credentials.username}:${credentials.password}@${host}:${port}/${database}?schema=public`;
}

/**
 * Get Prisma client instance (singleton pattern for Lambda)
 */
export async function getPrismaClient(): Promise<PrismaClient> {
  if (!prisma) {
    const databaseUrl = await createDatabaseUrl();
    const adapter = new PrismaPg({ connectionString: databaseUrl });
    
    prisma = new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
    });

    // Handle connection gracefully
    await prisma.$connect();
  }

  return prisma;
}

/**
 * Close database connection (for cleanup)
 */
export async function closePrismaConnection(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
  }
}

/**
 * Test database connection
 */
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
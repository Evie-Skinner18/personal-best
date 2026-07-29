  // to-do seed Exercise and Attempt

import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { MeasurementUnit, PrismaClient, TrainingModality } from '../prisma/generated/client'

const connectionString = process.env.DATABASE_URL ?? process.env.DB_CONNECTION_STRING;
if (!connectionString) {
  throw new Error("DATABASE_URL or DB_CONNECTION_STRING environment variable is required");
}

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

async function main() {
  const kbSwing = await prisma.exercise.upsert({
    where: { id: '1' },
    update: {},
    create: {
      name: 'Kettlebell swing',
      modality: TrainingModality.Weights,
      measurementUnit: MeasurementUnit.reps,
      dateLastTrained: new Date(),
      attempts: {
        create: {
            id: '1',
            numberOfReps: 80,
            weightInKg: 12,
        }
      },
    },
  });
  
  console.log({ kbSwing });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

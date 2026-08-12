import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import { MeasurementUnit, PrismaClient, TrainingModality } from './generated/client'
import { closePrismaConnection } from "../../amplify/shared/database";

// to-do connect using the shared lambda DB code
// remove
const connectionString = process.env.LOCAL_DB_CONNECTION_STRING;
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });


try {
    console.log('seeding Exercise table....');
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
  await closePrismaConnection();
}
   catch(e) {
    await closePrismaConnection();
    throw new Error(`error seeding DB: ${e}`);
  }  
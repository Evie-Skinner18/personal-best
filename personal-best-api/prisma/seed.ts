  // to-do seed Exercise and Attempt

import { PrismaPg } from '@prisma/adapter-pg';
import { MeasurementUnit, PrismaClient, TrainingModality } from '../prisma/generated/client'
import { environment } from '../environment';


const adapter = new PrismaPg({ connectionString: environment.DB_CONNECTION_STRING })
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

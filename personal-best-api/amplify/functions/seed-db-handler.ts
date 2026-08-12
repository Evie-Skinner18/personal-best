import 'reflect-metadata';
import { TrainingModality } from "../../src/domain/exercise/Exercise";
import { closePrismaConnection, getPrismaClient } from '../shared/database';
import { MeasurementUnit } from '../../src/domain/common/MeasurementUnit';


export const handler = async (): Promise<string> => {
  const prisma = await getPrismaClient();
  
//   container.registerInstance<PrismaClient>("PrismaClient", prisma);
//   container.register<IExerciseWriteRepository>('ExerciseWriteRepository',  {useClass: ExerciseWriteRepository});

//   const exerciseWriteRepository: ExerciseWriteRepository = container.resolve('ExerciseWriteRepository');

  try {
    console.log('seeding Exercise table....');
    const kbSwing = await prisma.exercise.upsert({
    where: { id: '1' },
    update: {},
    create: {
      name: 'Kettlebell swing',
      modality: TrainingModality.Weights,
      measurementUnit: MeasurementUnit.Reps,
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
  return JSON.stringify(kbSwing);
}
   catch(e) {
    await closePrismaConnection();
    throw new Error(`error seeding DB: ${e}`);
  }  
}
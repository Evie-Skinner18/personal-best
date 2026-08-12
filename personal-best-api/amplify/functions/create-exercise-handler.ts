import 'reflect-metadata';
import { Exercise } from "../../src/domain/exercise/Exercise";
import { container } from "tsyringe";
import { ExerciseWriteRepository, IExerciseWriteRepository } from '../../src/domain/exercise/exercise-write-repository';
import { getPrismaClient } from '../shared/database';
import { PrismaClient } from '@prisma/client';

type CreateExerciseArguments = {
    exercise: Exercise
}

export const handler = async (event: any): Promise<Exercise> => {
  const { exercise } = event.arguments as unknown as CreateExerciseArguments;

  const prisma = await getPrismaClient();
  container.registerInstance<PrismaClient>("PrismaClient", prisma);
  container.register<IExerciseWriteRepository>('ExerciseWriteRepository',  {useClass: ExerciseWriteRepository});

  const exerciseWriteRepository: ExerciseWriteRepository = container.resolve('ExerciseWriteRepository');

  try {
    await exerciseWriteRepository.createExercise(exercise);
    return exercise;
  } catch(e) {
    throw new Error(`error creating exercise: ${e}`);
  }
}
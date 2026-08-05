import 'reflect-metadata';
import { Exercise } from "../../domain/exercise/Exercise";
import { IExerciseReadRepository, ExerciseReadRepository } from "../../domain/exercise/exercise-read-repository"
import { container } from "tsyringe";
import { getPrismaClient } from '../shared/database';
import { PrismaClient } from '@prisma/client';

export const handler = async (event: any): Promise<Exercise[]> => {
  console.log(event);  

  const prisma = await getPrismaClient();
  container.registerInstance<PrismaClient>("PrismaClient", prisma);
  container.register<IExerciseReadRepository>('ExerciseReadRepository',  {useClass: ExerciseReadRepository});

  const exerciseReadRepository: ExerciseReadRepository = container.resolve('ExerciseReadRepository');

  const allExercises: Exercise[] = await exerciseReadRepository.getAllExercises();  

  console.log(allExercises);

  // to-do map to DTO
  return allExercises;
}
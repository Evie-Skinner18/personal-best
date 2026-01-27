import type { Schema } from "../data/resource"
import { Exercise } from "../../domain/exercise/Exercise";
import { IExerciseReadRepository, ExerciseReadRepository } from "../../domain/exercise/exercise-read-repository"
import 'reflect-metadata';
import { container } from "tsyringe";


type GetExercisesHandler = Schema["getExercises"]["functionHandler"]

export const handler: GetExercisesHandler = async (event): Promise<Exercise[]> => {
  container.register<IExerciseReadRepository>(ExerciseReadRepository,  {useClass: ExerciseReadRepository});

  const exerciseReadRepository = container.resolve(ExerciseReadRepository);

  const allExercises: Exercise[] = await exerciseReadRepository.getAllExercises();  

  // to-do map to DTO
  return allExercises;
}
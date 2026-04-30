import { Exercise } from "../../domain/exercise/Exercise";
import { IExerciseReadRepository, ExerciseReadRepository } from "../../domain/exercise/exercise-read-repository"
import 'reflect-metadata';
import { container } from "tsyringe";


// type GetExercisesHandler = Schema["getExercises"]["functionHandler"]

// to-do fix this GetExercisesHandler type issue not sure how. is it to do with TrainingModality?
export const handler = async (event: any): Promise<Exercise[]> => {
  console.log(event);

  container.register<IExerciseReadRepository>(ExerciseReadRepository,  {useClass: ExerciseReadRepository});

  const exerciseReadRepository = container.resolve(ExerciseReadRepository);

  const allExercises: Exercise[] = await exerciseReadRepository.getAllExercises();  

  // to-do map to DTO
  return allExercises;
}
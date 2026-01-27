import type { Schema } from "../data/resource"
import { PersonalBestAggregate } from "../../domain/personal-best/PersonalBestAggregate";
import { Exercise, TrainingModality } from "../../domain/exercise/Exercise";
import { Attempt } from "../../domain/attempt/Attempt";
import { IAttemptReadRepository, AttemptReadRepository } from "../../domain/attempt/attempt-read-repository"
import 'reflect-metadata';
import { container } from "tsyringe";
import { IPersonalBestWriteRepository, PersonalBestWriteRepository } from "../../domain/personal-best/personal-best-write-repository";
import { MeasurementUnit } from "../../domain/common/MeasurementUnit";
import { PersonalBestDto } from "../../domain/personal-best/personal-best-dto";


type GetPersonalBestsHandler = Schema["getPersonalBests"]["functionHandler"]

export const handler: GetPersonalBestsHandler = async (event): Promise<PersonalBestDto[]> => {
  container.register<IAttemptReadRepository>(AttemptReadRepository,  {useClass: AttemptReadRepository});
  container.register<IPersonalBestWriteRepository>(PersonalBestWriteRepository,  {useClass: PersonalBestWriteRepository});

  const attemptReadRepository = container.resolve(AttemptReadRepository);
  const pbWriteRepository = container.resolve(PersonalBestWriteRepository);

  const { exerciseName, modality } = event.arguments;
  console.log("exercise is ", JSON.stringify(exerciseName));
  console.log("modality is ", JSON.stringify(modality));

  const todaysDate = new Date();

  // to-do look these up in the db from a read repository
  const kettlebellSwing: Exercise = {
    id: "exercise-1",
    name: "Kettlebell Swing",
    modality: TrainingModality.Weights,
    measurementUnit: MeasurementUnit.Reps,
    currentPersonalBestId: "attempt-3",
    dateLastTrained: todaysDate.getMilliseconds(),
  };

  // WIP
  // const exerciseReadRepository = new ExerciseReadRepository(await getPrismaClient());
// const exercise = await repository.getExerciseById('some-id');

  const allKbSwingAttemptsSoFar: Attempt[] = await attemptReadRepository.getAllAttemptsForExerciseId(kettlebellSwing.id);

  const latestKbSwingAttempt = allKbSwingAttemptsSoFar.sort((a, b) => {
      return b.createdAt - a.createdAt;
    })[0];
  

  const pb = new PersonalBestAggregate(kettlebellSwing, latestKbSwingAttempt, pbWriteRepository);
  return [
    pb.toDto()
  ]
}

// Add the required npm packages
// Implement the actual database service layer
// Update/create Lambda functions that use SQL instead of DynamoDB
// Test the entire setup
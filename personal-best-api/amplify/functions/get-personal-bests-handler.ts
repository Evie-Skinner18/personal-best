import "reflect-metadata";
import type { Schema } from "../data/resource"
import { PersonalBestAggregate } from "../../domain/personal-best/PersonalBestAggregate";
import { Exercise, TrainingModality } from "../../domain/exercise/Exercise";
import { Attempt } from "../../domain/attempt/Attempt";
import { IAttemptReadRepository, AttemptReadRepository } from "../../domain/attempt/attempt-read-repository"
import { container } from "tsyringe";
import { IPersonalBestWriteRepository, PersonalBestWriteRepository } from "../../domain/personal-best/personal-best-write-repository";
import { MeasurementUnit } from "../../domain/common/MeasurementUnit";
import { PersonalBestDto } from "../../domain/personal-best/personal-best-dto";
import { PrismaClient } from "../../prisma/generated/client";
import { getPrismaClient } from "../shared/database";

type GetPersonalBestsHandler = Schema["getPersonalBests"]["functionHandler"]

export const handler: GetPersonalBestsHandler = async (event): Promise<PersonalBestDto[]> => {
  console.log("getting personal bests!");

  // to-do should the prisma client be newed up or registered?
  const prisma = await getPrismaClient();
  container.registerInstance<PrismaClient>("PrismaClient", prisma);

  container.register<IAttemptReadRepository>("IAttemptReadRepository",  {useClass: AttemptReadRepository});
  container.register<IPersonalBestWriteRepository>("IPersonalBestWriteRepository",  {useClass: PersonalBestWriteRepository});

  const attemptReadRepository: AttemptReadRepository = container.resolve("IAttemptReadRepository");
  const pbWriteRepository: PersonalBestWriteRepository = container.resolve("IPersonalBestWriteRepository");

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
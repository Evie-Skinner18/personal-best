import "reflect-metadata";
import type { Schema } from "../data/resource"
import { PersonalBestAggregate } from "../../domain/personal-best/PersonalBestAggregate";
import { Exercise, TrainingModality } from "../../domain/exercise/Exercise";
import { Attempt } from "../../domain/attempt/Attempt";
import { container } from "tsyringe";
import { IPersonalBestWriteRepository, PersonalBestWriteRepository } from "../../domain/personal-best/personal-best-write-repository";
import { MeasurementUnit } from "../../domain/common/MeasurementUnit";
import { PrismaClient } from "../../prisma/generated/client";
import { getPrismaClient } from "../shared/database";
import { PersonalBestDto } from "../../domain/personal-best/personal-best-dto";

type CreatePersonalBestHandler = Schema["createPersonalBest"]["functionHandler"]

type CreatePersonalBestArguments = {
    exerciseId: string;
    todaysAttempt: Attempt;
}

// to-do date fields changed to integer
export const handler: CreatePersonalBestHandler = async (event): Promise<PersonalBestDto> => {
  // to-do should the prisma client be newed up or registered?
  const prisma = await getPrismaClient();
  container.registerInstance<PrismaClient>("PrismaClient", prisma);

  // the aggregate is in charge of its own state so it has a repository inside it
  container.register<IPersonalBestWriteRepository>("IPersonalBestWriteRepository",  {useClass: PersonalBestWriteRepository});
  const pbWriteRepository: PersonalBestWriteRepository = container.resolve("IPersonalBestWriteRepository");

  // yuck how do I type the event args better
  const { exerciseId, todaysAttempt } = event.arguments as unknown as CreatePersonalBestArguments;
  console.log("exerciseId is ", JSON.stringify(exerciseId));
  console.log("todays attempt is ", JSON.stringify(todaysAttempt));

  const todaysDate = new Date();

  // to-do look up the exercise in the db from a read repository
  const kettlebellSwing = new Exercise(
    "exercise-1",
    "Kettlebell Swing",
    TrainingModality.Weights,
    MeasurementUnit.Reps,
    "attempt-3",
    todaysDate.getMilliseconds()
);  

  const kettlebellSwingPb = new PersonalBestAggregate(kettlebellSwing, todaysAttempt, pbWriteRepository);
  kettlebellSwingPb.add();

  return kettlebellSwingPb.toDto();
}

//to-do
// add a mutation to create an attempt
// Test the entire setup
// add try/catch
import type { Schema } from "../data/resource"
import { PersonalBestAggregate, PersonalBestDto } from "../../domain/personal-best/PersonalBestAggregate";
import { Attempt, Exercise, TrainingModality } from "../../domain/exercise/Exercise";
import { MeasurementUnit } from "../../domain/common/MeasurementUnit";

type GetPersonalBestsEvent = {
    exerciseName?: string;
    modality?: TrainingModality;
}

// to-do
export const handler: Schema["getPersonalBests"]["functionHandler"] = async (event): Promise<PersonalBestDto[]> => {
  // const { exerciseName, modality } = event.arguments;
  console.log("Evie", JSON.stringify(event));
  const todaysDate = new Date();

  // to-do look these up in the db from a read repository
  const kettlebellSwing: Exercise = {
    id: "exercise-1",
    name: "Kettlebell Swing",
    modality: TrainingModality.Weights,
    createdAt: todaysDate,
    updatedAt: todaysDate,
    currentPersonalBestId: "attempt-3",
    dateLastTrained: todaysDate.toString(),
  };
  
  const latestKbSwingAttempt: Attempt = {
    id: "attempt-3",
    exerciseId: "exercise-1",
    date: todaysDate.toString(),
    measurementUnit: MeasurementUnit.Reps,
    number: 78,
    createdAt: todaysDate,
    updatedAt: todaysDate,
    weight: 12
  };
  const pb = PersonalBestAggregate.create(kettlebellSwing, latestKbSwingAttempt);
  return [
    pb.toSchemaFormat()
  ]
}

// Add the required npm packages
// Implement the actual database service layer
// Update/create Lambda functions that use SQL instead of DynamoDB
// Test the entire setup
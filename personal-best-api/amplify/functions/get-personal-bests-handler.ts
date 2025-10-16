import { Attempt, Exercise, TrainingModality } from "@prisma/client";
import type { Schema } from "../data/resource"
import { PersonalBest } from "../../domain/personal-best/PersonalBest";

type GetPersonalBestsArgs = {
    exerciseName?: string;
    modality?: TrainingModality;
}

// to-do
export const handler: Schema["getPersonalBests"]["functionHandler"] = async (event) => {
  const { exerciseName } = event.arguments;
  const kettlebellSwing: Exercise={};
  const latestKbSwingAttempt: Attempt={};
  return PersonalBest.create();
}

// Add the required npm packages
// Implement the actual database service layer
// Update/create Lambda functions that use SQL instead of DynamoDB
// Test the entire setup
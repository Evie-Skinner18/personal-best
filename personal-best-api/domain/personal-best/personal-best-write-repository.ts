import { TrainingModality } from "../../domain/exercise/Exercise";
import { PersonalBest } from "../../domain/personal-best/PersonalBestAggregate";

// to-do might not be needed
export interface PersonalBestWriteRepository {
      // Personal best operations
  getPersonalBests(exerciseName?: string, modality?: TrainingModality): Promise<PersonalBest[]>;
  getPersonalBestForExercise(exerciseId: string): Promise<PersonalBest | null>;
}
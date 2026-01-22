import { Exercise, TrainingModality } from '../../domain/exercise/Exercise';
import { Attempt } from '../../domain/attempt/Attempt';

export interface DatabaseService {
  // Exercise operations
  getExercises(modality?: TrainingModality): Promise<Exercise[]>;
  getExerciseById(id: string): Promise<Exercise | null>;
  createExercise(name: string, modality: TrainingModality): Promise<Exercise>;
  updateExercise(id: string, updates: Partial<Exercise>): Promise<Exercise>;
  deleteExercise(id:string): Promise<Exercise>;

  // Attempt operations
  getAttempts(exerciseId: string, limit?: number): Promise<Attempt[]>;
  getAttemptById(id: string): Promise<Attempt | null>;
  createAttempt(data: Omit<Attempt, 'id' | 'createdAt' | 'updatedAt'>): Promise<Attempt>;

  // Utility operations
  testConnection(): Promise<boolean>;
  close(): Promise<void>;
}
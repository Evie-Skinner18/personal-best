import { TrainingModality, MeasurementUnit } from '../domain/exercise/Exercise';

export interface Exercise {
  id: string;
  name: string;
  currentPersonalBestId?: string;
  modality: TrainingModality;
  dateLastTrained?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Attempt {
  id: string;
  exerciseId: string;
  date: Date;
  measurementUnit: MeasurementUnit;
  number: number;
  weight?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PersonalBest {
  attemptId: string;
  exerciseId: string;
  exerciseName: string;
  measurementUnit: MeasurementUnit;
  number: number;
  weight?: number;
  date: Date;
  amountAboveLastPersonalBest: number;
}

export interface DatabaseService {
  // Exercise operations
  getExercises(modality?: TrainingModality): Promise<Exercise[]>;
  getExerciseById(id: string): Promise<Exercise | null>;
  createExercise(name: string, modality: TrainingModality): Promise<Exercise>;
  updateExercise(id: string, updates: Partial<Exercise>): Promise<Exercise>;

  // Attempt operations
  getAttempts(exerciseId: string, limit?: number): Promise<Attempt[]>;
  getAttemptById(id: string): Promise<Attempt | null>;
  createAttempt(data: Omit<Attempt, 'id' | 'createdAt' | 'updatedAt'>): Promise<Attempt>;

  // Personal best operations
  getPersonalBests(exerciseName?: string, modality?: TrainingModality): Promise<PersonalBest[]>;
  getPersonalBestForExercise(exerciseId: string): Promise<PersonalBest | null>;

  // Utility operations
  testConnection(): Promise<boolean>;
  close(): Promise<void>;
}
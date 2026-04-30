import { MeasurementUnit, PrismaClient } from '../../prisma/generated/client';
import { Exercise, TrainingModality } from './Exercise';

export interface IExerciseReadRepository {
  getExerciseById(id: string): Promise<Exercise | null>;
  getAllExercises(): Promise<Exercise[]>;
  getExercisesByModality(modality: TrainingModality): Promise<Exercise[]>;
  getExerciseByName(name: string): Promise<Exercise | null>;
}

export class ExerciseReadRepository implements IExerciseReadRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async getExerciseById(id: string): Promise<Exercise | null> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id }
    });

    return exercise ? Exercise.mapFromDbModel(exercise) : null;
  }

  async getAllExercises(): Promise<Exercise[]> {
    const exercises = await this.prisma.exercise.findMany({
      orderBy: { name: 'asc' }
    });

    return exercises.map((e) => Exercise.mapFromDbModel(e));
  }

  async getExercisesByModality(modality: TrainingModality): Promise<Exercise[]> {
    const exercises = await this.prisma.exercise.findMany({
      where: { 
        modality: TrainingModality[modality] as any
      },
      orderBy: { name: 'asc' }
    });
    return exercises.map((e) => Exercise.mapFromDbModel(e));
  }

  async getExercisesByMeasurementUnit(unit: MeasurementUnit): Promise<Exercise[]> {
    const exercises = await this.prisma.exercise.findMany({
      where: { 
        measurementUnit: MeasurementUnit[unit] as any
      },
      orderBy: { name: 'asc' }
    });
    return exercises.map((e) => Exercise.mapFromDbModel(e));
  }

  async getExerciseByName(name: string): Promise<Exercise | null> {
    const exercise = await this.prisma.exercise.findFirst({
      where: { 
        name: {
          equals: name,
          mode: 'insensitive'
        }
      }
    });

    return exercise ? Exercise.mapFromDbModel(exercise) : null;
  }
}

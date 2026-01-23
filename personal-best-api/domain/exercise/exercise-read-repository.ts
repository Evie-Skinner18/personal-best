import { PrismaClient } from '@prisma/client';
import { Exercise, TrainingModality } from './Exercise';

export interface IExerciseReadRepository {
  getExerciseById(id: string): Promise<Exercise | null>;
  getAllExercises(): Promise<Exercise[]>;
  getExercisesByModality(modality: TrainingModality): Promise<Exercise[]>;
  getExerciseByName(name: string): Promise<Exercise | null>;
}

export class ExerciseReadRepository implements IExerciseReadRepository {
    // help is the PrismaClient an interface?
  constructor(private readonly prisma: PrismaClient) {}

  async getExerciseById(id: string): Promise<Exercise | null> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id }
    });

    return exercise ? this.mapToExercise(exercise) : null;
  }

  async getAllExercises(): Promise<Exercise[]> {
    const exercises = await this.prisma.exercise.findMany({
      orderBy: { name: 'asc' }
    });

    return exercises.map(this.mapToExercise);
  }

  async getExercisesByModality(modality: TrainingModality): Promise<Exercise[]> {
    const exercises = await this.prisma.exercise.findMany({
      where: { 
        modality: TrainingModality[modality] as any
      },
      orderBy: { name: 'asc' }
    });
    return exercises.map(this.mapToExercise);
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

    return exercise ? this.mapToExercise(exercise) : null;
  }

  private mapToExercise(prismaExercise: any): Exercise {
    return {
      id: prismaExercise.id,
      name: prismaExercise.name,
      currentPersonalBestId: prismaExercise.currentPersonalBestId ?? undefined,
      modality: TrainingModality[prismaExercise.modality as keyof typeof TrainingModality],
      measurementUnit: prismaExercise.measurementUnit,
      dateLastTrained: prismaExercise.dateLastTrained 
        ? new Date(prismaExercise.dateLastTrained).getTime()
        : 0
    };
  }
}

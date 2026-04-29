import { PrismaClient, TrainingModality } from '../../prisma/generated/client';
import { EnumTrainingModalityFieldUpdateOperationsInput } from '../../prisma/generated/models';
import { Exercise } from './Exercise';

export interface IExerciseWriteRepository {
  updateExercise(id: string): Promise<Exercise | null>;
  deleteExercise(): Promise<Exercise[]>;
}

export class ExerciseWriteRepository implements IExerciseWriteRepository {
  constructor(private readonly prisma: PrismaClient) {}

//   const user = await prisma.user.update({
//   where: { id: 1 },
//   data: { email: "alice@prisma.io" },
// });
    async updateExercise(id: string, updatedExercise: Exercise): Promise<Exercise | null> {
        await this.prisma.exercise.update({
            where: {id}, 
            data: { 
                name: updatedExercise.name,  
                currentPersonalBestId: updatedExercise.currentPersonalBestId,
                // yuck
                modality: updatedExercise.modality as unknown as TrainingModality | EnumTrainingModalityFieldUpdateOperationsInput | undefined,
                dateLastTrained: updatedExercise.dateLastTrained,
                measurementUnit: updatedExercise.measurementUnit
             }})

    }
    deleteExercise(): Promise<Exercise[]> {
        throw new Error('Method not implemented.');
    }
}

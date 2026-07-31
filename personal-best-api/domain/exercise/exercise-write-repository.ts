import { inject, injectable } from "tsyringe";
import { PrismaClient } from '../../prisma/generated/client';
import { Exercise } from './Exercise';

export interface IExerciseWriteRepository {
  updateExercise(id: string, updatedExercise: Exercise): Promise<void>;
  deleteExercise(id: string): Promise<void>;
}

@injectable()
export class ExerciseWriteRepository implements IExerciseWriteRepository {
    constructor(@inject("PrismaClient") private readonly prisma:  PrismaClient){}

    async updateExercise(id: string, updatedExercise: Exercise): Promise<void> {
        const prismaExercise = updatedExercise.mapToDbModel();

        try {
            await this.prisma.exercise.update({
            where: {id}, 
            data: { 
                name: prismaExercise.name,  
                currentPersonalBestId: prismaExercise.currentPersonalBestId,
                modality: prismaExercise.modality,
                dateLastTrained: prismaExercise.dateLastTrained,
                measurementUnit: prismaExercise.measurementUnit
             }})
        } catch (error) {
            throw new Error(`Could not update exercise with id ${id} and name ${updatedExercise.name} in Prisma. ${error}`);
        }

    }

    async deleteExercise(id: string): Promise<void> {
        try {
            await this.prisma.exercise.delete({
            where: { id }
        })
        } catch (error) {
            throw new Error(`Could not delete exercise with id ${id} sin Prisma. ${error}`);
        }
    }
}

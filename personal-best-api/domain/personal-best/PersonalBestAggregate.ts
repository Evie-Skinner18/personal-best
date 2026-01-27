import { MeasurementUnit } from "../common/MeasurementUnit";
import { PersonalBestDto } from "./personal-best-dto";
import { Attempt } from "../attempt/Attempt";
import { Exercise } from "../exercise/Exercise";
import { IPersonalBestWriteRepository } from "./personal-best-write-repository";
import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { PrismaPersonalBestWithoutId } from "./prisma-pb-without-id";
import { PersonalBestAggregate as PrismaPersonalBest } from "../../prisma/generated/client";


@injectable()
export class PersonalBestAggregate {
    private id!: string;
    private attemptId: string;
    private exerciseId: string;
    private exerciseName: string;
    private measurementUnit: MeasurementUnit;
    private numberOfReps?: number;
    private timeInMinutes?: string;
    private weightInKg: number;
    private date: Date;
    private amountAboveLastPersonalBest: number;


    // to-do does it need at least 2 attempts: the most recent one and the one immediately previous to compare
    // help
    // surely it will need to look at all attempts ever recorded to determine the personal best not just the latest one
    // how will this scale
    constructor (
        exercise: Exercise, 
        currentPbAttempt: Attempt, 
        @inject("IPersonalBestWriteRepository") private writeRepository: IPersonalBestWriteRepository     
) {
        let timeInMinutes: string | undefined;
        let numberOfReps: number | undefined;

        switch (exercise.measurementUnit) {
            case MeasurementUnit.Time:
                if (!currentPbAttempt.timeInMinutes) {
                    const startTimeAtNought = new Date();
                    startTimeAtNought.setHours(0);
                    startTimeAtNought.setMinutes(0);
                    startTimeAtNought.setSeconds(0);

                    timeInMinutes = startTimeAtNought.toTimeString();
                } else {
                    timeInMinutes = currentPbAttempt.timeInMinutes;
                }
                break;
            case MeasurementUnit.Reps:
                numberOfReps = currentPbAttempt.numberOfReps?? 0;
        }
        // to-do does this need a strategy pattern depending on MEsurementUnit?

        this.attemptId = currentPbAttempt.id,
        this.exerciseId = exercise.id,
        this.exerciseName = exercise.name,
        this.measurementUnit = exercise.measurementUnit,
        this.numberOfReps = numberOfReps;
        this.timeInMinutes = timeInMinutes;
        this.weightInKg = currentPbAttempt.weightInKg;
        this.date = new Date(currentPbAttempt.createdAt),
        // to-do calculate this based on no of reps/time
        this.amountAboveLastPersonalBest = 1
        
    }

    public toDto(): PersonalBestDto {
        return {
        id: this.id,
        attemptId: this.attemptId,
        exerciseId: this.exerciseId,
        exerciseName: this.exerciseName,
        measurementUnit: this.measurementUnit,
        numberOfReps: this.numberOfReps,
        timeInMinutes: this.timeInMinutes,
        weightInKg: this.weightInKg,
        date: this.date.toISOString(),
        amountAboveLastPersonalBest: this.amountAboveLastPersonalBest
        };
  }

    private mapToCreateDbModel(): PrismaPersonalBestWithoutId {
        return {
            exerciseId: this.exerciseId,
            exerciseName: this.exerciseName,
            measurementUnit: this.measurementUnit,
            numberOfReps: this.numberOfReps ?? null,
            timeInMinutes: parseInt(this.timeInMinutes ?? '0') ?? null,
            weightInKg: this.weightInKg,
            date: this.date,
            amountAboveLastPb: this.amountAboveLastPersonalBest,
            attemptId: this.attemptId,
        }
    }

    private mapToUpdateDbModel(): PrismaPersonalBest {
        return {
            id: this.id,
            exerciseId: this.exerciseId,
            exerciseName: this.exerciseName,
            measurementUnit: this.measurementUnit,
            numberOfReps: this.numberOfReps ?? null,
            timeInMinutes: parseInt(this.timeInMinutes ?? '0') ?? null,
            weightInKg: this.weightInKg,
            date: this.date,
            amountAboveLastPb: this.amountAboveLastPersonalBest,
            attemptId: this.attemptId,
        }
    }

    public async add(): Promise<void> {
        const prismaPersonalBest = this.mapToCreateDbModel();
        await this.writeRepository.addPersonalBest(prismaPersonalBest);
    }

    public async update(): Promise<void> {
        const prismaPersonalBest = this.mapToUpdateDbModel();
        await this.writeRepository.updatePersonalBest(prismaPersonalBest);
    }
}
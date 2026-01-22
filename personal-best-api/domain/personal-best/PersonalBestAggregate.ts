import { MeasurementUnit } from "../common/MeasurementUnit";
import { Attempt } from "../attempt/Attempt";
import { Exercise } from "../exercise/Exercise";
import { IPersonalBestWriteRepository } from "./personal-best-write-repository";
import { inject, injectable } from "tsyringe";

export interface PersonalBestByMonth {
    month: string,
    personalBest: PersonalBestAggregate
}

export interface PersonalBestDto {
    attemptId: string;
    exerciseId: string;
    exerciseName: string;
    measurementUnit: MeasurementUnit;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    date: string;
    amountAboveLastPersonalBest: number;
}

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

    public toSchemaFormat(): PersonalBestDto {
    return {
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

  public async add(): Promise<void> {
    await this.writeRepository.addPersonalBest(this);
  }

  public async update(): Promise<void> {
    await this.writeRepository.updatePersonalBest(this.id)
  }
}
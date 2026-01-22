import { MeasurementUnit } from "../common/MeasurementUnit";
import { Attempt } from "../attempt/Attempt";
import { Exercise } from "../exercise/Exercise";

export interface PersonalBestByMonth {
    month: string,
    personalBest: PersonalBestAggregate
}

export interface PersonalBestDto {
    attemptId: string;
    exerciseId: string;
    exerciseName: string;
    measurementUnit: MeasurementUnit;
    number?: number;
    time?: string;
    weight?: number;
    date: string;
    amountAboveLastPersonalBest: number;
}

// this is an aggregate of exercise and attempt
export class PersonalBestAggregate {
    attemptId: string;
    exerciseId: string;
    exerciseName: string;
    measurementUnit: MeasurementUnit;
    number?: number;
    time?: string;
    weight?: number;
    date: Date;
    amountAboveLastPersonalBest: number;
    // to-do inject a write repository for persistence


    private constructor(
        attemptId: string, 
        exerciseId: string, 
        exerciseName: string, 
        measurementUnit: MeasurementUnit, 
        number: number | undefined, 
        time: string | undefined, 
        weight: number | undefined, 
        amountAboveLastPersonalBest: number) {
        this.attemptId = attemptId;
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.measurementUnit = measurementUnit; 
        this.number = number;
        this.time = time;
        this.weight = weight;
        this.date = new Date();
        this.amountAboveLastPersonalBest = amountAboveLastPersonalBest;        
    }

    public static create(exercise: Exercise, currentPbAttempt: Attempt) {
        let time: string | undefined;
        let numberOfReps: number | undefined;

        switch (currentPbAttempt.measurementUnit) {
            case MeasurementUnit.Time:
                if (!currentPbAttempt.timeInMinutes) {
                    const startTimeAtNought = new Date();
                    startTimeAtNought.setHours(0);
                    startTimeAtNought.setMinutes(0);
                    startTimeAtNought.setSeconds(0);

                    time = startTimeAtNought.toTimeString();
                } else {
                    time = currentPbAttempt.timeInMinutes;
                }
                break;
            case MeasurementUnit.Reps:
                numberOfReps = currentPbAttempt.numberOfReps?? 0;
        }
        // to-do does this need a strategy pattern depending on MEsurementUnit?
        return new PersonalBestAggregate(
            currentPbAttempt.id,
            exercise.id,
            exercise.name,
            currentPbAttempt.measurementUnit,
            numberOfReps,
            time,
            currentPbAttempt.weightInKg?? 0,
            // to-do calculate the increase
            1
        );
    }

    public toSchemaFormat(): PersonalBestDto {
    return {
      attemptId: this.attemptId,
      exerciseId: this.exerciseId,
      exerciseName: this.exerciseName,
      measurementUnit: this.measurementUnit,
      number: this.number,
      time: this.time,
      weight: this.weight,
      date: this.date.toISOString(),
      amountAboveLastPersonalBest: this.amountAboveLastPersonalBest
    };
  }
}
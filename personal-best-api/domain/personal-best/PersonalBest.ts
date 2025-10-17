import { MeasurementUnit } from "../common/MeasurementUnit";
import { Attempt, Exercise } from "../exercise/Exercise";

export interface PersonalBestByMonth {
    month: string,
    personalBest: PersonalBest
}

export interface PersonalBestDto {
    attemptId: string;
    exerciseId: string;
    exerciseName: string;
    measurementUnit: MeasurementUnit;
    number: number;
    weight?: number;
    date: string;
    amountAboveLastPersonalBest: number;
}

// this is an aggregate of exercise and attempt
export class PersonalBest {
    attemptId: string;
    exerciseId: string;
    exerciseName: string;
    measurementUnit: MeasurementUnit;
    number: number;
    weight?: number;
    date: Date;
    amountAboveLastPersonalBest: number;


    private constructor(attemptId: string, exerciseId: string, exerciseName: string, measurementUnit: MeasurementUnit, number: number, weight: number | undefined, amountAboveLastPersonalBest: number) {
        this.attemptId = attemptId;
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.measurementUnit = measurementUnit; 
        this.number = number;
        this.weight = weight;
        this.date = new Date();
        this.amountAboveLastPersonalBest = amountAboveLastPersonalBest;        
    }

    public static create(exercise: Exercise, currentPbAttempt: Attempt) {
        return new PersonalBest(
            currentPbAttempt.id,
            exercise.id,
            exercise.name,
            currentPbAttempt.measurementUnit,
            currentPbAttempt.number,
            currentPbAttempt.weight,
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
      weight: this.weight,
      date: this.date.toISOString(),
      amountAboveLastPersonalBest: this.amountAboveLastPersonalBest
    };
  }
}
import { MeasurementUnit } from "../common/MeasurementUnit";
import { Attempt, Exercise } from "../exercise/Exercise";

export interface PersonalBestByMonth {
    month: string,
    personalBest: PersonalBest
}

// this is an aggregate of exercise and attempt
export class PersonalBest {
    attemptId: string;
    exerciseId: string;
    measurementUnit: MeasurementUnit;
    number: number;
    weight?: number;
    date: Date;
    amountAboveLastPersonalBest: number;


    private constructor(attemptId: string, exerciseId: string, measurementUnit: MeasurementUnit, number: number, weight: number | undefined, amountAboveLastPersonalBest: number) {
        this.attemptId = attemptId;
        this.exerciseId = exerciseId;
        this.measurementUnit = measurementUnit; 
        this.number = number;
        this.weight = weight;
        this.date = new Date();
        this.amountAboveLastPersonalBest = amountAboveLastPersonalBest;        
    }

    public create(exercise: Exercise, currentPbAttempt: Attempt) {
        return new PersonalBest(
            currentPbAttempt.id,
            exercise.id,
            currentPbAttempt.measurementUnit,
            currentPbAttempt.number,
            currentPbAttempt.weight,
            // to-do calculate the increase
            1
        );
    }
}
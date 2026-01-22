import { MeasurementUnit } from "../common/MeasurementUnit";
import { Attempt } from "../attempt/Attempt";
import { Exercise } from "../exercise/Exercise";
import { injectable } from "tsyringe";

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

// this is an aggregate of exercise and attempt
@injectable
export class PersonalBestAggregate {
    private id: string;
    private attemptId: string;
    private exerciseId: string;
    private exerciseName: string;
    private measurementUnit: MeasurementUnit;
    private numberOfReps?: number;
    private timeInMinutes?: string;
    private weightInKg: number;
    private date: Date;
    private amountAboveLastPersonalBest: number;
    // to-do inject a write repository for persistence

    // private writeRepository: IPersonalBestWriteRepository;


    private constructor(
        attemptId: string, 
        exerciseId: string, 
        exerciseName: string, 
        measurementUnit: MeasurementUnit, 
        numberOfReps: number | undefined, 
        timeInMinutes: string | undefined, 
        weightInKg: number, 
        amountAboveLastPersonalBest: number) {
        this.attemptId = attemptId;
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.measurementUnit = measurementUnit; 
        this.numberOfReps = numberOfReps;
        this.timeInMinutes = timeInMinutes;
        this.weightInKg = weightInKg;
        this.date = new Date();
        this.amountAboveLastPersonalBest = amountAboveLastPersonalBest;   
        @inject('IPersonalBestWriteRepository') private IPersonalBestWriteRepository     
    }

    public static create(exercise: Exercise, currentPbAttempt: Attempt) {
        let timeInMinutes: string | undefined;
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
            timeInMinutes,
            currentPbAttempt.weightInKg?? 0,
            // to-do calculate the increase
            1,
        );
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
}
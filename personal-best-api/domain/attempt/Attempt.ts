import { MeasurementUnit } from "../common/MeasurementUnit";

// to-do should attempt be an aggregate
// maybe an entity
  // should it calculate the increase/decrease since the last attempt?
export class Attempt {
    id!: string;
    exerciseId: string;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    createdAt: number;
    updatedAt?: number;


    constructor(
        exerciseId: string, 
        numberOfReps: number | undefined, 
        timeInMinutes: string | undefined, 
        weightInKg: number,
        createdAt: Date
    ) {
        const dateInEpochMilliseconds = createdAt.getTime();

        this.exerciseId = exerciseId;
        this.numberOfReps = numberOfReps;
        this.timeInMinutes = timeInMinutes;
        this.weightInKg = weightInKg;
        this.createdAt = dateInEpochMilliseconds;
    }
}
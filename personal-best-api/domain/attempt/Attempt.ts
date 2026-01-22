import { MeasurementUnit } from "../common/MeasurementUnit";

// to-do should attempt be an aggregate
// maybe an entity
  // should it calculate the increase/decrease since the last attempt?
export class Attempt {
    id: string;
    exerciseId: string;
    date: string;
    measurementUnit: MeasurementUnit;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    createdAt: Date;
    updatedAt: Date;


    constructor(id: string, exerciseId: string, 
        date: string, measurementUnit: string, numberOfReps: number | undefined, timeInMinutes: string | undefined, weightInKg: number,) {
        
        
    }
}
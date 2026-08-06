import { MeasurementUnit } from "../common/MeasurementUnit";

export interface PersonalBestDto {
    id: string;
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
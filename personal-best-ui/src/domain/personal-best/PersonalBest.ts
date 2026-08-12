import { MeasurementUnit } from "../common/MeasurementUnit";

export interface PersonalBest {
    id: string,
    exerciseId: string,
    measurementUnit: MeasurementUnit,
    number: number,
    weight: number | undefined
    amountAboveLastPersonalBest: number;
}

export interface PersonalBestByMonth {
    month: string,
    personalBest: number
}
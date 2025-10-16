import { MeasurementUnit } from "../common/MeasurementUnit"

export interface Exercise {
    id: string,
	name: string,
	currentPersonalBestId: string,
    modality: TrainingModality,
    dateLastTrained: string
    createdAt: Date;
    updatedAt: Date;
}

export interface Attempt {
    id: string,
    exerciseId: string,
    date: string,
    measurementUnit: MeasurementUnit,
    number: number,
    weight?: number;
    createdAt: Date;
    updatedAt: Date;
}

// help
// surely it will need to look at all attempts ever recorded to determine the personal best not just the latest one
// how will this scale


export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


import { MeasurementUnit } from "../common/MeasurementUnit"

export interface Exercise {
    id: string,
	name: string,
    attempts: Attempt[],
	currentPersonalBestId: string,
    modality: TrainingModality,
    dateLastTrained: string
}

export interface Attempt {
    id: string,
    date: string,
    measurementUnit: MeasurementUnit,
    number: number,
    weight: number | undefined
}

export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


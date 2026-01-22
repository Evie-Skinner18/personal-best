import { MeasurementUnit } from "../common/MeasurementUnit"
// value object but it has an id because I want to be able to link an attempt to an exercise by id
export interface Exercise {
    id: string,
	name: string,
	currentPersonalBestId?: string,
    modality: TrainingModality,
    measurementUnit: MeasurementUnit;
    dateLastTrained: number
}

export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


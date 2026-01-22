import { MeasurementUnit } from "../common/MeasurementUnit"

export interface Exercise {
    id: string,
	name: string,
	currentPersonalBestId?: string,
    modality: TrainingModality,
    dateLastTrained: string
    createdAt: Date;
    updatedAt: Date;
}

// help
// surely it will need to look at all attempts ever recorded to determine the personal best not just the latest one
// how will this scale
// just focus on plotting the results on a graph for now


export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


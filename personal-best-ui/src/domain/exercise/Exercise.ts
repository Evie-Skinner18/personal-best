import { Attempt } from "../attempt/Attempt"

export interface Exercise {
    id: string,
	name: string,
    attempts: Attempt[],
	currentPersonalBestId: string,
    modality: TrainingModality,
    dateLastTrained: string
}

export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


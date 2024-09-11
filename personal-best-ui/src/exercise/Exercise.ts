export interface Exercise {
    id: string,
	name: string,
    latestAttempt: LatestAttempt,
	currentPersonalBestId: string,
    modality: TrainingModality,
    dateLastTrained: string
}

export interface LatestAttempt {
    measurementUnit: MeasurementUnit,
    number: number,
    weight: number | undefined
}

export interface PersonalBest {
    id: string,
    exerciseId: string,
    measurementUnit: MeasurementUnit,
    number: number,
    weight: number | undefined
    amountAboveLastPersonalBest: number;
}

export enum MeasurementUnit {
    Time = "minutes",
    Reps = "reps"
}

export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}

export interface PersonalBestByMonth {
    month: string,
    personalBest: number
}
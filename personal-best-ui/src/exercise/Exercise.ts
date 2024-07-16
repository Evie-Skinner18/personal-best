export interface Exercise {
    id: string,
	name: string,
    latestAttempt: LatestAttempt,
	personalBest: PersonalBest,
    modality: TrainingModality,
    dateLastTrained: string
}

export interface LatestAttempt {
    measurementUnit: MeasurementUnit,
    number: number,
    weight: number | undefined
}

export interface PersonalBest {
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
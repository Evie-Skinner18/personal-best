export interface Exercise {
    id: string,
	name: string,
	currentPersonalBestId: string,
    modality: TrainingModality,
    measurementUnit: MeasurementUnit,
    dateLastTrained: number
}

export enum TrainingModality {
    Karate = 'Karate',
    Calisthenics = 'Calisthenics',
    BJJ = 'BJJ',
    Weights = 'Weights',
    Movement = 'Movement',
    Running = 'Running'
}

export enum MeasurementUnit {
    Time = "minutes",
    Reps = "reps"
}


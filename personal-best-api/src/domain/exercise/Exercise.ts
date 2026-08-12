import { MeasurementUnit } from "../common/MeasurementUnit"
import { Exercise as PrismaExercise, TrainingModality as PrismaTrainingModality } from "../../prisma/generated/client"

export class Exercise {
    id!: string;
	  name!: string;
	  currentPersonalBestId?: string;
    modality!: TrainingModality;
    measurementUnit!: MeasurementUnit;
    dateLastTrained?: number

    constructor(
      id: string,
      name: string,
      modality: TrainingModality,
      measurementUnit: MeasurementUnit,
      currentPersonalBestId?: string,
      dateLastTrained?: number
    ) {
      this.id = id,
      this.name = name,
      this.modality = modality,
      this.measurementUnit = measurementUnit,
      this.currentPersonalBestId = currentPersonalBestId,
      this.dateLastTrained = dateLastTrained
    }

    public static mapFromDbModel(prismaExercise: PrismaExercise): Exercise {
      return new Exercise(
        prismaExercise.id,
        prismaExercise.name,
        TrainingModality[prismaExercise.modality as keyof typeof TrainingModality],
        prismaExercise.measurementUnit as MeasurementUnit,
        prismaExercise.currentPersonalBestId ?? undefined,
        prismaExercise.dateLastTrained 
          ? new Date(prismaExercise.dateLastTrained).getTime()
          : 0
        )
  }

  public static mapToDbModel(domainExercise: Exercise): PrismaExercise {
    console.log('mapping to DB model...')
    const currentPbId: string | null = domainExercise.currentPersonalBestId? domainExercise.currentPersonalBestId : null;
    const dateLastTrainedAsDate: Date | null = domainExercise.dateLastTrained? new Date(domainExercise.dateLastTrained) : null;

    return {
      id: domainExercise.id,
      name: domainExercise.name,
      currentPersonalBestId: currentPbId,
      modality: domainExercise.modality as PrismaTrainingModality,
      dateLastTrained: dateLastTrainedAsDate,
      measurementUnit: domainExercise.measurementUnit
    }
  }
}

export enum TrainingModality {
  Karate = 'Karate',
  Calisthenics = 'Calisthenics',
  BJJ = 'BJJ',
  Weights = 'Weights',
  Movement = 'Movement',
  Running = 'Running'
}


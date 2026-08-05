import { MeasurementUnit } from "../common/MeasurementUnit"
import { Exercise as PrismaExercise, TrainingModality as PrismaTrainingModality } from "../../prisma/generated/client"
import { ExerciseCreateNestedOneWithoutPersonalBestAggregatesInput } from "../../prisma/generated/models";

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

  public mapToDbModel(): PrismaExercise {
    console.log('mapping to DB model...')
    const currentPbId: string | null = this.currentPersonalBestId? this.currentPersonalBestId : null;
    const dateLastTrainedAsDate: Date | null = this.dateLastTrained? new Date(this.dateLastTrained) : null;

    return {
      id: this.id,
      name: this.name,
      currentPersonalBestId: currentPbId,
      modality: this.modality as PrismaTrainingModality,
      dateLastTrained: dateLastTrainedAsDate,
      measurementUnit: this.measurementUnit
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


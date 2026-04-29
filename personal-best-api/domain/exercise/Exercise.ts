import { MeasurementUnit } from "../common/MeasurementUnit"
import { Exercise as PrismaExercise } from "../../prisma/generated/client"
// value object but it has an id because I want to be able to link an attempt to an exercise by id
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

  public static mapToDbModel(): PrismaExercise {
    return {
      id: this,

    }
  }
}

export enum TrainingModality {
    Karate,
    Calisthenics,
    BJJ,
    Weights,
    Movement,
    Running
}


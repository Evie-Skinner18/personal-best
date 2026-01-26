import { MeasurementUnit } from "../common/MeasurementUnit"
import { Exercise as PrismaExercise } from "../../prisma/generated/client"
// value object but it has an id because I want to be able to link an attempt to an exercise by id
export class Exercise {
    id!: string;
	name!: string;
	currentPersonalBestId?: string;
    modality!: TrainingModality;
    measurementUnit!: MeasurementUnit;
    dateLastTrained!: number

    // to-do miught need a ctor

    public static mapFromDbModel(prismaExercise: PrismaExercise): Exercise {
    return {
      id: prismaExercise.id,
      name: prismaExercise.name,
      currentPersonalBestId: prismaExercise.currentPersonalBestId ?? undefined,
      modality: TrainingModality[prismaExercise.modality as keyof typeof TrainingModality],
      measurementUnit: prismaExercise.measurementUnit as MeasurementUnit,
      dateLastTrained: prismaExercise.dateLastTrained 
        ? new Date(prismaExercise.dateLastTrained).getTime()
        : 0
    };
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


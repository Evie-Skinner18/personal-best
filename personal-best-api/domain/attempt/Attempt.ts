import { Attempt as PrismaAttempt } from "../../prisma/generated/client"

// to-do should attempt be an aggregate
// maybe an entity
  // should it calculate the increase/decrease since the last attempt?
export class Attempt {
    id!: string;
    exerciseId: string;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    createdAt: number;
    updatedAt?: number;


    constructor(
        exerciseId: string, 
        numberOfReps: number | undefined, 
        timeInMinutes: string | undefined, 
        weightInKg: number,
        createdAt: Date
    ) {
        const dateInEpochMilliseconds = createdAt.getTime();

        this.exerciseId = exerciseId;
        this.numberOfReps = numberOfReps;
        this.timeInMinutes = timeInMinutes;
        this.weightInKg = weightInKg;
        this.createdAt = dateInEpochMilliseconds;
    }

    public static mapFromDbModel(prismaAttempt: PrismaAttempt): Attempt {
        return {
            id: prismaAttempt.id,
            exerciseId: prismaAttempt.exerciseId,
            numberOfReps: prismaAttempt.numberOfReps?? undefined,
            timeInMinutes: prismaAttempt.timeInMinutes?.toString()?? undefined,
            weightInKg: prismaAttempt.weightInKg,
            createdAt: prismaAttempt.createdAt.getUTCMilliseconds(),
            updatedAt: prismaAttempt.updatedAt.getUTCMilliseconds()
        }
    }
}
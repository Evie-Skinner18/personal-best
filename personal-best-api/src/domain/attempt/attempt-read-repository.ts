import { inject, injectable } from "tsyringe";
import { Attempt } from "./Attempt";
import { PrismaClient } from "../../prisma/generated/client";

export interface IAttemptReadRepository {
  getAttemptById(id: string): Promise<Attempt | null>;
  getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]>;
}

@injectable()
export class AttemptReadRepository implements IAttemptReadRepository {

constructor(@inject("PrismaClient") private readonly prisma:  PrismaClient){}

  async getAttemptById(id: string): Promise<Attempt | null> {
       const attempt = await this.prisma.attempt.findUnique({
      where: { id }
    });

    return attempt ? Attempt.mapFromDbModel(attempt) : null;
  }
  async getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]> {
    // to-do type this
    console.log(`${(this.prisma as PrismaClient)}`)
      const attempts = await this.prisma.attempt.findMany({
      where: { 
        exerciseId
      },
    });
    return attempts.map((a) => Attempt.mapFromDbModel(a));
  }
}
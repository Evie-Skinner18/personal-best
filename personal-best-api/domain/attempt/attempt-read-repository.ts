import { PrismaClient } from "../../prisma/generated/client";
import { Attempt } from "./Attempt";

export interface IAttemptReadRepository {
  getAttemptById(id: string): Promise<Attempt | null>;
  getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]>;
}

export class AttemptReadRepository implements IAttemptReadRepository {
    constructor(private readonly prisma: PrismaClient) {}

  async getAttemptById(id: string): Promise<Attempt | null> {
       const attempt = await this.prisma.attempt.findUnique({
      where: { id }
    });

    return attempt ? Attempt.mapFromDbModel(attempt) : null;
  }
  async getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]> {
      const attempts = await this.prisma.attempt.findMany({
      where: { 
        exerciseId
      },
    });
    return attempts.map((a) => Attempt.mapFromDbModel(a));
  }
}
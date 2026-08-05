import { injectable, inject } from "tsyringe";
import { PrismaClient } from "../../prisma/generated/client";
import { PersonalBestAggregate as PrismaPersonalBest } from "../../prisma/generated/client";
import { PersonalBestAggregateCreateInput } from "../../prisma/generated/models";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBestWithExerciseAndAttemptInside: PersonalBestAggregateCreateInput): Promise<void>;
  // to-do decide if you want to nest it and create associated models at same time
  // or create them separately and associate them via just the FK
  updatePersonalBest(personalBest: PrismaPersonalBest): Promise<void>;
}

@injectable()
export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  constructor(@inject("PrismaClient") private readonly prisma:  PrismaClient){}

  async addPersonalBest(personalBestWithExerciseAndAttemptInside: PersonalBestAggregateCreateInput): Promise<void> {
    try{
      await this.prisma.personalBestAggregate.create({
      data: personalBestWithExerciseAndAttemptInside
    });
    } catch(e) {
      console.error(`erorr in repository: ${e}`);
      throw e;
    }
  }

  async updatePersonalBest(personalBest: PrismaPersonalBest): Promise<void> {
    await this.prisma.personalBestAggregate.update({
      where: {
        id: personalBest.id,
      },
      data: personalBest
    });
  }
}
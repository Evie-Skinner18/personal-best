import { PrismaClient } from "../../prisma/generated/client";
import { PersonalBestAggregate as PrismaPersonalBest } from "../../prisma/generated/client";
import { PrismaPersonalBestWithoutId } from "./prisma-pb-without-id";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBest: PrismaPersonalBestWithoutId): Promise<void>;
  updatePersonalBest(personalBest: PrismaPersonalBest): Promise<void>;
}

export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addPersonalBest(personalBest: PrismaPersonalBest): Promise<void> {
    await this.prisma.personalBestAggregate.create({
      data: personalBest
    });
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
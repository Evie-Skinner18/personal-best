import { PrismaClient } from "../../prisma/generated/client";
import { PersonalBestAggregate } from "./PersonalBestAggregate";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBest: PersonalBestAggregate): Promise<void>;
  updatePersonalBest(id: string): Promise<void>;
}

export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addPersonalBest(personalBest: PersonalBestAggregate): Promise<void> {
    // to-do map to Prisma model
    await this.prisma.personalBestAggregate.create(personalBest);
  }
  // help
  updatePersonalBest(id: string): Promise<void> {
    const pbToUpdate = this.personalBestsInMemory.find((pb) => pb.id === id)
  }
}
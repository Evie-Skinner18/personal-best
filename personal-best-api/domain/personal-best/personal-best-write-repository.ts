import { PrismaClient } from "@prisma/client";
import { PersonalBestAggregate } from "./PersonalBestAggregate";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBest: PersonalBestAggregate): Promise<void>;
  updatePersonalBest(id: string): Promise<void>;
}

export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addPersonalBest(personalBest: PersonalBestAggregate): Promise<void> {
    await this.prisma
  }
  // help
  updatePersonalBest(id: string): Promise<void> {
    const pbToUpdate = this.personalBestsInMemory.find((pb) => pb.id === id)
  }
}
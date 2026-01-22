import { PersonalBestAggregate } from "./PersonalBestAggregate";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBest: PersonalBestAggregate): Promise<void>;
  updatePersonalBest(id: string): Promise<void>;
}

export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  private personalBestsInMemory: PersonalBestAggregate[] = [];

  async addPersonalBest(personalBest: PersonalBestAggregate): Promise<void> {
    await this.personalBestsInMemory.push(personalBest);
  }
  // help
  updatePersonalBest(id: string): Promise<void> {
    const pbToUpdate = this.personalBestsInMemory.find((pb) => pb.id === id)
  }
}
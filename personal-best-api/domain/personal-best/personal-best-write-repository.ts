import { PersonalBestAggregate } from "./PersonalBestAggregate";

export interface IPersonalBestWriteRepository {
  addPersonalBest(personalBest: PersonalBestAggregate): Promise<void>;
  updatePersonalBest(id: string): Promise<void>;
}

export class PersonalBestWriteRepository implements IPersonalBestWriteRepository {
  private personalBestsInMemory: PersonalBestAggregate[] = [];

  addPersonalBest(personalBest: PersonalBestAggregate): Promise<void> {
    this.personalBestsInMemory.push(personalBest);
  }
  updatePersonalBest(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
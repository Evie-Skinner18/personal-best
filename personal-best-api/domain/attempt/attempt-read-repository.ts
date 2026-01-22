import { Attempt } from "./Attempt";

export interface IAttemptReadRepository {
  getAttemptById(id: string): Promise<Attempt | undefined>;
  getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]>;
}

export class AttemptReadRepository implements IAttemptReadRepository {
    private todaysDate = new Date().toISOString();

    private attemptsInMemory: Attempt[] = [
    
        // kb swing
    new Attempt(
    "exercise-1",
    this.todaysDate,
    78,
    undefined,
    12,
    this.todaysDate),
    // forearm plank
    new Attempt(
    "exercise-2",
    this.todaysDate,
    undefined,
    "00:01:32",
    0,
    this.todaysDate),
    ]
    // help not sure if this is relevant without the auto id in the DB
  async getAttemptById(id: string): Promise<Attempt | undefined> {
      return await this.attemptsInMemory.find((a) => a.id === id);
  }
  async getAllAttemptsForExerciseId(exerciseId: string): Promise<Attempt[]> {
      return await this.attemptsInMemory.filter((a) => a.exerciseId === exerciseId);
  }
}
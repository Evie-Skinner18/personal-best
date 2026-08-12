export interface Attempt {
    id?: string;
    exerciseId: string;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    createdAt: number;
    updatedAt?: number;
}
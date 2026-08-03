// to-do for some reason no of reps is fine as a number but the dates must be strings
export interface Attempt {
    id?: string;
    exerciseId: string;
    numberOfReps?: number;
    timeInMinutes?: string;
    weightInKg: number;
    // want these to both be timestamp numbers across the stack
    createdAt: string;
    updatedAt?: string;
}
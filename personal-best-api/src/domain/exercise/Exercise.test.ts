import { MeasurementUnit } from "../common/MeasurementUnit";
import { Exercise, TrainingModality } from "./Exercise";
import { expect } from 'chai';

describe('Exercise', () => {

    it('should correctly map the domain model to the DB model', async () => {
        const burpee: Exercise = {
            id: "exercise-1",
            name: "Burpee",
            modality: TrainingModality.Calisthenics,
            measurementUnit: MeasurementUnit.Reps,
            currentPersonalBestId: "attempt-3",
            dateLastTrained: 1785754791745
        }; 

       const dbExercise = Exercise.mapToDbModel(burpee);

       expect(dbExercise.name).to.equal(burpee.name);   
    });
});

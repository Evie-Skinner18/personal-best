-- PostgreSQL schema for Personal Best application

-- Create enum types
CREATE TYPE training_modality AS ENUM ('Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running');
CREATE TYPE measurement_unit AS ENUM ('minutes', 'reps');

-- Create exercises table
CREATE TABLE exercises (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    current_personal_best_id UUID,
    modality training_modality NOT NULL,
    date_last_trained TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create attempts table
CREATE TABLE attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exercise_id UUID NOT NULL,
    date TIMESTAMP NOT NULL,
    measurement_unit measurement_unit NOT NULL,
    number INTEGER DEFAULT 0,
    weight INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (exercise_id) REFERENCES exercises(id) ON DELETE CASCADE
);

-- Add foreign key constraint for current_personal_best_id
ALTER TABLE exercises 
ADD CONSTRAINT fk_current_personal_best 
FOREIGN KEY (current_personal_best_id) REFERENCES attempts(id);

-- Create indexes for better performance
CREATE INDEX idx_attempts_exercise_id ON attempts(exercise_id);
CREATE INDEX idx_attempts_date ON attempts(date);
CREATE INDEX idx_exercises_modality ON exercises(modality);
CREATE INDEX idx_exercises_name ON exercises(name);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_exercises_updated_at 
    BEFORE UPDATE ON exercises 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_attempts_updated_at 
    BEFORE UPDATE ON attempts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
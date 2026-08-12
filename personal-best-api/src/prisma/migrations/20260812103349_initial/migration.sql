-- CreateEnum
CREATE TYPE "TrainingModality" AS ENUM ('Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running');

-- CreateEnum
CREATE TYPE "MeasurementUnit" AS ENUM ('minutes', 'reps');

-- CreateTable
CREATE TABLE "exercises" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "current_personal_best_id" UUID,
    "modality" "TrainingModality" NOT NULL,
    "date_last_trained" TIMESTAMP(3),
    "measurement_unit" "MeasurementUnit" NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attempts" (
    "id" UUID NOT NULL,
    "exercise_id" UUID NOT NULL,
    "numberOfReps" INTEGER,
    "timeInMinutes" INTEGER,
    "weightInKg" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personalbests" (
    "id" UUID NOT NULL,
    "attempt_id" UUID NOT NULL,
    "exercise_id" UUID NOT NULL,
    "exercise_name" VARCHAR(255) NOT NULL,
    "measurement_unit" "MeasurementUnit" NOT NULL,
    "numberOfReps" INTEGER,
    "timeInMinutes" INTEGER,
    "weightInKg" INTEGER NOT NULL DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL,
    "amountAboveLastPb" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "personalbests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exercises_modality_idx" ON "exercises"("modality");

-- CreateIndex
CREATE INDEX "exercises_name_idx" ON "exercises"("name");

-- CreateIndex
CREATE INDEX "attempts_exercise_id_idx" ON "attempts"("exercise_id");

-- CreateIndex
CREATE INDEX "personalbests_attempt_id_idx" ON "personalbests"("attempt_id");

-- CreateIndex
CREATE INDEX "personalbests_exercise_id_idx" ON "personalbests"("exercise_id");

-- AddForeignKey
ALTER TABLE "attempts" ADD CONSTRAINT "attempts_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personalbests" ADD CONSTRAINT "personalbests_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personalbests" ADD CONSTRAINT "personalbests_attempt_id_fkey" FOREIGN KEY ("attempt_id") REFERENCES "attempts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

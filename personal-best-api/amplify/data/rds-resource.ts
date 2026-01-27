import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { Duration } from 'aws-cdk-lib';
import { DatabaseInstance, DatabaseInstanceEngine, PostgresEngineVersion } from 'aws-cdk-lib/aws-rds';
import { Vpc, SubnetType, SecurityGroup, Port } from 'aws-cdk-lib/aws-ec2';
import { RemovalPolicy } from 'aws-cdk-lib';
import { getPersonalBests } from '../functions/get-personal-bests';

// Define the schema for our RDS-based API
const schema = a.schema({
  Exercise: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      currentPersonalBestId: a.string(),
      modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
      measurementUnit: a.enum(['minutes', 'reps']),
      dateLastTrained: a.datetime(),
      // Relationship to attempts
      attempts: a.hasMany('Attempt', 'exerciseId')
    })
    .authorization((allow) => [allow.guest()]),

  Attempt: a
    .model({
      id: a.id().required(),
      exerciseId: a.id().required(),
      date: a.datetime().required(),
      numberOfReps: a.integer().default(0),
      timeInMinutes: a.string(),
      weightInKg: a.integer(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      // Relationship to exercise
      exercise: a.belongsTo('Exercise', 'exerciseId')
    })
    .authorization((allow) => [allow.guest()]),

  getPersonalBests: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(getPersonalBests)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
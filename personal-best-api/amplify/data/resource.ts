import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { getPersonalBests } from '../functions/get-personal-bests';

/*== Custom RDS-based graphQL API Schema ========================================
This schema defines the API interface for our PostgreSQL RDS backend.
this is the graphQL schema
The actual data storage is handled via SQL queries in Lambda functions.
=========================================================================*/

const schema = a.schema({
  // Custom types to match our database schema
  Exercise: a.customType({
    id: a.string(),
    name: a.string(),
    currentPersonalBestId: a.string(),
    modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
    dateLastTrained: a.datetime(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }),

  Attempt: a.customType({
    id: a.string(),
    exerciseId: a.string(),
    date: a.datetime(),
    measurementUnit: a.enum(['minutes', 'reps']),
    timeInMinutes: a.string(),
    numberOfReps: a.integer(),
    weightInKg: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }),

  PersonalBestAggregate: a.customType({
    id: a.string(),
    attemptId: a.string(),
    exerciseId: a.string(),
    exerciseName: a.string(),
    measurementUnit: a.enum(['minutes', 'reps']),
    number: a.integer(),
    weight: a.integer(),
    date: a.datetime(),
    amountAboveLastPersonalBest: a.integer(),
  }),

  // Query operations
  getPersonalBests: a
    .query()
    .arguments({
      exerciseName: a.string(),
      modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
    })
    .returns(a.ref('PersonalBest').array())
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(getPersonalBests)),

  // to-do add handlers for these
//   getExercises: a
//     .query()
//     .arguments({
//       modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
//     })
//     .returns(a.ref('Exercise').array())
//     .authorization(allow => [allow.guest()]),

//   getAttempts: a
//     .query()
//     .arguments({
//       exerciseId: a.string(),
//       limit: a.integer(),
//     })
//     .returns(a.ref('Attempt').array())
//     .authorization(allow => [allow.guest()]),

//   // Mutation operations
//   createExercise: a
//     .mutation()
//     .arguments({
//       name: a.string(),
//       modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
//     })
//     .returns(a.ref('Exercise'))
//     .authorization(allow => [allow.guest()]),

//   createAttempt: a
//     .mutation()
//     .arguments({
//       exerciseId: a.string(),
//       date: a.datetime(),
//       measurementUnit: a.enum(['minutes', 'reps']),
//       number: a.integer(),
//       weight: a.integer(),
//     })
//     .returns(a.ref('Attempt'))
//     .authorization(allow => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

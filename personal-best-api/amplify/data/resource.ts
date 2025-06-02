import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { getPersonalBests } from '../functions/get-personal-bests';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/

    const attempt = a.customType({
  date: a.datetime(),
  measurementUnit: a.enum(['minutes', 'reps']),
  number: a.integer().default(0),
  weight: a.integer().default(0),
});
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean().default(false),
    })
    .authorization((allow) => [allow.guest()]),
  
    PersonalBest: a
    .model({
      exerciseId: a.string(),
      measurementUnit: a.enum(['minutes', 'reps']),
      number: a.integer().default(0),
      weight: a.integer().default(0),
      amountAboveLastPersonalBest: a.integer().default(0),
    })
    .authorization((allow) => [allow.guest()]),


  Exercise: a
    .model({  
      name: a.string(),
      // to-do how do I make an array of custom type
      // attempts: a.array(attempt).default([]),
      currentPersonalBestId: a.string(),
      modality: a.enum(['Karate', 'Calisthenics', 'BJJ', 'Weights', 'Movement', 'Running']),
      dateLastTrained: a.string(),
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

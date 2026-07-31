# Personal Best

## An app to help me track my taining progress

## How to run the app

# Front end
1. `cd personal-best-ui`
2. `npm run dev`

# Back end
1. `cd personal-best-api`
2. Login to an AWS account using the CLI. For me I use an alias command `aws-login-midas`
3. Select the sandbox option
4. Deploy the AWS Amplify stack to the sandbox account `npx ampx sandbox --profile midas`
5. Once the RDS database has been deployed, go to the AWS console and retrieve the DB connection string

# Tools and Technologies Used
- React
- React Testing Library
- ChartJS
- Styled Components
- Vite
- GraphQL
- AWS AppSync
- AWS Lambda
- AWS Amplify (Gen 2 code-first GraphQL schema)
- AWS RDS
- Postgres
- Prisma ORM 6
- TypeScript
- Jest
- NPM

# Local API Development
- You must be in the API directory to run Prisma commands otherwise it will prompt you to install Prisma 7, which doesn't work with Amplify
- To use the Prisma ORM, run ```cd personal-best-api``` from your Terminal and run commands like ```npx prisma validate```. This validates your ```schema.prisma``` file
- When you update this file with new DB models, run ```npx prisma validate``` and then the next commands in the following order:
    1.  ```npm run generate``` to regenerate the PrismaClient class that your data access layer uses to interact with the DB.
    2. ```npm run migrate``` to migrate the latest version of the DB schema to the DB
    3. (Do 3 and 4 at least once then after it's optional) To seed the DB, get the Postgres connection string from AWS RDS and run ```export DB_CONNECTION_STRING='[connection string]'```
    4. Run ```npm run seed```
- When you have finished developing, run ```npx ampx sandbox delete``` to destroy the infrastructure in the sandbox

# Summary of Technical Approach
## personal-best-api
- GraphQL schema definition in TypeScript in ``` resource.ts ```
- AWS Amplify generates the GraphQL schema and the AppSync resolvers on every deployment
- Lambda functions executed by the AppSync resolvers coordinate business logic. E.g ``` get-personal-bests-handler.ts ```
- Domain models enact the business logic using a Domain Driven Design approach. E.g ``` PersonalBestAggregate.ts ```
- Read repositories retrieve entities and aggregates from a PostgreSQL RDS database. E.g ``` exercise-read-repository.ts ```
- Write repositories modify entities and aggregates in the same DB. E.g ``` personal-best-write-repository.ts ```

# AI Usage
I used GitHub Copilot in agent mode from VSCode to help me change my data layer to use RDS instead of the original DynamoDB. This is because the data is relational and I had never worked with relational data in TypeScript before. I also used it to help me understand how Amplify works, as this technology was also completely new to me. I got a custom agent from the Prisma 7 documentation to give the AI the donkey work of migrating from Prisma 6 to 7 in the best practice way.

## AI Prompts Used
- Hi, please can you change my code so that it makes tables in AWS RDS rather than DynamoDB? The way my models interact is relational so I want to use a relational database
- Can you tell me why I have been able to create a graphQL API using AWS amplify without a graphQL schema in the personal-best-api directory?
- hi, please can you make me a repository in this file that connects to the Exercise table of my SQL database defined in the Prisma code? It should be able to only execute read operations
- hi, please can you go through the merge conflicts in my personal-best-api/package.json file and accept the <<<HEAD current change for each one?
- hi, my Amplify stack is not deploying my get-exercises-handler due to an error. Specifically, when I try to deploy this handler as-is (using the ExerciseReadRepository ), Amplify cannot find a file called @prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs. Can you help me understand why my other handler that uses similar repositories connected to Prisma deploys fine but this one doesn't?
- hi, why do I have two prisma schema files now? I think you generated a second one and I don't know which is the correct one to use. I want to stay on Prisma 6
- hi, I'm struggling to connect my Prisma schema to my Postgres DB hosted on AWS RDS. When I run prisma validate, the Prisma schema gives me: Error validating datasource db: the URL must start with the protocol postgresql:// or postgres://
- hi, please can you migrate personal-best-api to Prisma 7? You may already have some of the files you need e.g a compatible prisma.config.ts is already there


to-do: ask Claude do I still need the lambda layer since I no longer get an error when I run Prisma generate
- Add an exercise to the DB in order to skip seeding it from local
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
- Prisma ORM
- TypeScript
- Jest
- NPM

# Local API Development
- To use the Prisma ORM, run ```cd personal-best-api``` from your Terminal and run commands like ```npx prisma validate```. This validates your ```schema.prisma``` file
- When you update this file with new DB models, run ```npx prisma validate``` and then ```npx prisma generate``` to regenerate the PrismaClient class that your data access layer uses to interact with the DB.
- To seed the DB, get the Postgres connection string from AWS RDS and run ```export DB_CONNECTION_STRING='[connection string]'```
- Run ```npx prisma db seed```

# Summary of Technical Approach
## personal-best-api
- GraphQL schema definition in TypeScript in ``` resource.ts ```
- AWS Amplify generates the GraphQL schema and the AppSync resolvers on every deployment
- Lambda functions executed by the AppSync resolvers coordinate business logic. E.g ``` get-personal-bests-handler.ts ```
- Domain models enact the business logic using a Domain Driven Design approach. E.g ``` PersonalBestAggregate.ts ```
- Read repositories retrieve entities and aggregates from a PostgreSQL RDS database. E.g ``` exercise-read-repository.ts ```
- Write repositories modify entities and aggregates in the same DB. E.g ``` personal-best-write-repository.ts ```

# AI Usage
I used GitHub Copilot in agent mode from VSCode to help me change my data layer to use RDS instead of the original DynamoDB. This is because the data is relational and I had never worked with relational data in TypeScript before. I also used it to help me understand how Amplify works, as this technology was also completely new to me.

## AI Prompts Used
- Hi, please can you change my code so that it makes tables in AWS RDS rather than DynamoDB? The way my models interact is relational so I want to use a relational database
- Can you tell me why I have been able to create a graphQL API using AWS amplify without a graphQL schema in the personal-best-api directory?
- hi, please can you make me a repository in this file that connects to the Exercise table of my SQL database defined in the Prisma code? It should be able to only execute read operations
- hi, please can you go through the merge conflicts in my personal-best-api/package.json file and accept the <<<HEAD current change for each one?
# Personal Best

## An app to help me track my taining progress

## How to run the app

# Front end
1. `cd personal-best-ui`
2. `npm run dev`

# Back end
1. `cd personal-best-api`
2. Login to an AWS account using the CLI. For me I use an alias command `aws-login-personalbest`
3. Select the sandbox option
4. Deploy the AWS Amplify stack to the sandbox account `npx ampx sandbox --profile personalbest`
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
- You must be in the API directory to run Prisma commands
- In .env, fill the ```LOCAL_DB_CONNECTION_STRING``` environent variable with the connection string pointing to the personalbest DB running on your local instance of PostgreSQL. This is used as a shadow DB to enable Prisma to create a .sql file from the migrate command. Then the migration lambda will be the one that applies the .sql file to the RDS DB in AWS (you can't migrate to the RDS DB directly from local)
- To use the Prisma ORM, run ```cd personal-best-api``` from your Terminal and run commands like ```npx prisma validate```. This validates your ```schema.prisma``` file
- When you update this file with new DB models, run ```npx prisma validate``` and then the next commands in the following order:
    1.  ```npm run generate``` to regenerate the PrismaClient class that your data access layer uses to interact with the DB.
    2. ```npm run migrate``` to create a SQL file defining the latest version of the DB schema
    4. ```npm run migrate:apply``` to run that SQL against the DB (apply the migration)
    5. (Do 3 and 4 at least once then after it's optional) To seed the DB, get the Postgres connection string from AWS RDS. Get the username and password from Secrets Manager (personal-best-dev-db-credentials). Use these to build the full connection string in .env and run ```export DB_CONNECTION_STRING='[connection string]'```
    6. Run ```npm run seed```
- When you have finished developing, run ```npx ampx sandbox delete``` to destroy the infrastructure in the sandbox

# Important
- Prisma needs a percentage encoded value for the DB password
- Once the sandbox is deployed, retrieve the encoded password and copy it securely to your clipboard by running:
```cd personal-best-api```
```aws secretsmanager list-secrets```
```aws secretsmanager get-secret-value \
  --secret-id <ARN of the database secret> \
  --query SecretString --output text \
  | jq -r .password \
  | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>process.stdout.write(encodeURIComponent(d.trim())))" \
  | pbcopy
  ```
  This command:
  1. invokes the AWS CLI to obtain the DB password from secrets manager using the secret's ARN (it is an object with username and password properties)
  2. checks for a secret string returned by that invocation and tells the Terminal to output that as text
  3. specifies that we're after the `password` property of the resulting stringified object
  4. uses Node to run an inline piece of JavaScript in quotation marks. This code percentage-encodes the password value 
  5. copies the encoded value to the user's clipboard

# Summary of Technical Approach
## personal-best-api
- GraphQL schema definition in TypeScript in ``` resource.ts ```
- All the infrastructure is provisioned in TypeScript using Amplify's Gen2 CDK
- AWS Amplify generates the GraphQL schema and the AppSync resolvers on every deployment
- Lambda functions executed by the AppSync resolvers coordinate business logic. E.g ``` get-personal-bests-handler.ts ```
- Domain models enact the business logic using a Domain Driven Design approach. E.g ``` PersonalBestAggregate.ts ```
- Read repositories retrieve entities and aggregates from a PostgreSQL RDS database. E.g ``` exercise-read-repository.ts ```
- Write repositories modify entities and aggregates in the same DB. E.g ``` personal-best-write-repository.ts ```
- The React UI is tightly coupled to the API but I'm not sure how to fix this yet

# AI Usage
I used GitHub Copilot in agent mode from VSCode to help me change my data layer to use RDS instead of the original DynamoDB. This is because the data is relational and I had never worked with relational data in TypeScript before. I also used it to help me understand how Amplify works, as this technology was also completely new to me. I got a custom agent from the Prisma 7 documentation to give the AI the donkey work of migrating from Prisma 6 to 7 in the best practice way. After that, I only used it in ask mode so it could advise me like a senior engineer and I would implement the code changes myself. I found it very useful to scaffold my learning with the Amplify Gen 2 CDK and especially creating network infrastructure. Finally, I used it to create the command above for retrieving the encoded DB password, as I wasn't sure how to obtain this encoded value in a secure way. The subsequent explanation/gist of the command is my own.



# to-do: 
- make a lambda that will apply the migrations. Lambda layer including the Prisma binaries it will need to run prisma migrate deploy
- consider connecting to the RDS DB using the certificate in the existing lambda layer. Currently not needed
- create a shared domain layer as a separate directory to both the api and ui. One source of truth for both apps
- should the shared domain dir contain DTOs needed for the UI
- both apps are in a monorepo but they should not be tightly coupled
- refactor src/backend.ts as theres a lot going on
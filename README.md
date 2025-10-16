# Personal Best

## An app to help me track my taining progress

## How to run the app
1. `cd personal-best-ui`
2. `npm run dev`


1. `cd personal-best-api`
2. Login to an AWS account using the CLI. For me I use an alias command `aws-login-midas`
3. Select the sandbox option
4. `npx ampx sandbox --profile midas`

# Tools and Technologies Used
- React
- React Testing Library
- ChartJS
- Vite
- GraphQL
- AWS Lambda
- TypeScript
- Jest
- Styled Components
- AWS Amplify
- NPM
- Postgres

# AI Usage
I used GitHub Copilot in agent mode from VSCode to help me change my data layer to use RDS instead of the original DynamoDB. This is because the data is relational and I had never worked with relational data in TypeScript before.

## AI Prompts Used
- Hi, please can you change my code so that it makes tables in AWS RDS rather than DynamoDB? The way my models interact is relational so I want to use a relational database
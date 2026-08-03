import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../personal-best-api/amplify/data/resource";
import { Amplify } from "aws-amplify"
import outputs from "../../personal-best-api/amplify_outputs.json";
// import { ClientCustomType } from '../node_modules/@aws-amplify/data-schema/dist/esm/ClientSchema/Core';

// help the ui is tightly coupled to the api
// to-do want to have it invoke the api separately using axios
Amplify.configure(outputs)

// to-do ClientCustomType
const client = generateClient<Schema>() 

export default client;
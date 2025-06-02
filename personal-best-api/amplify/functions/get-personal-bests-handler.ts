import type { Schema } from "../data/resource"

type GetPersonalBestsArgs = {
    name: string;
}

export const handler: Schema["getPersonalBests"]["functionHandler"] = async (event) => {
  const { name } = event.arguments;
  return `You can do it ${name}!`
}
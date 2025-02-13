import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '037c9a4e4f54d501661d3ae1cd834bc852abf65e', queries,  });
export default client;
  
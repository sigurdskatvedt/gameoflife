import { Chunk } from "./Chunk";

export type Rule = {
  id: string;
  name: string;
  description?: string;
  stateNames: string[];
  others: number;
  chunks: Chunk[];
};

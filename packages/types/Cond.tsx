import { Chunk } from "./Chunk";

export type Cond = {
  id: string;
  nbr: number[];
  nbgStates: number;
  chunk: Chunk[];
  chunkId: string;
  states: number[];
};

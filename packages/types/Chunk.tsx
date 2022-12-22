import { Cond } from "./Cond";
import { Rule } from "./Rule";

export type Chunk = {
  id: string;
  newState: number;
  conds: Cond[];
  rule: Rule;
  ruleId: string;
};

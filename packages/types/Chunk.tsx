import { Cond } from "./Cond";
import { Rule } from "./Rule";

export type Chunk = {
  id: string;
  newState: string;
  conds: Cond[];
  rule: Rule;
  ruleId: string;
};

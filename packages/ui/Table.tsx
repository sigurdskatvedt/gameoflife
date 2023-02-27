import { Rule } from "types";
import { RuleTableRow } from "./RuleTableRow";

import gql from "graphql-tag";
import { TableComp } from "./TableComp";
import { getAllRules, getRule } from "./getRule";

const AllRulesQuery = gql`
  query AllRules {
    allRules {
      id
      name
      description
      others
      stateNames
      chunks {
        id
        newState
        conds {
          id
          nbgStates
          nbr
          states
        }
      }
    }
  }
`;

export async function UiTable() {
  const data = await getAllRules(AllRulesQuery);
  const ruleArray: Array<Rule> = data.allRules;

  return <>{data ? <TableComp rules={ruleArray}></TableComp> : null}</>;
}

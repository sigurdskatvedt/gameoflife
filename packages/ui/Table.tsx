import { Rule } from "types";
import { RuleTableRow } from "./RuleTableRow";
import gql from "graphql-tag";
import { TableComp } from "./TableComp";
import { getAllRules, getRule } from "./getRule";
import Link from "next/link";

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

  return (
    <>
      {data ? <TableComp rules={ruleArray}></TableComp> : null}
      <div className="flex w-full justify-center">
        <div className="btn btn-outline m-2 w-96 p-4 align-middle">
          <Link href={"rule/create"}>Create New Rule</Link>
        </div>
      </div>
    </>
  );
}

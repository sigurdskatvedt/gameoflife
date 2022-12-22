import { Table } from "flowbite-react";
import { Rule } from "types";
import { RuleTableRow } from "./RuleTableRow";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

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

export const UiTable: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(AllRulesQuery);
  if (data) {
    const rules: Array<Rule> = data.allRules;
    const row = rules.map((rule) => <RuleTableRow rule={rule}></RuleTableRow>);
  }

  return (
    <>
      {data ? (
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Rule name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Names of states</Table.HeadCell>
            <Table.HeadCell>State of others</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.allRules.map((rule: Rule, i: Number) => (
              <RuleTableRow key={i} rule={rule}></RuleTableRow>
            ))}
          </Table.Body>
        </Table>
      ) : null}
    </>
  );
};

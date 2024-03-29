
import { Key } from "react";
import { Rule } from "types";
import { RuleTableRow, RuleTableRowProps } from "./RuleTableRow";

type Props = {
  rules: Array<Rule>;
};

export const TableComp: React.FC<Props> = ({ rules }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Rule Name</th>
            <th>Description</th>
            <th>Names of states</th>
            <th>State of others</th>
            <th>
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule: Rule, i: Key) => (
            <RuleTableRow rule={rule} key={i}></RuleTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
/*     <Table hoverable={true}>
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
    </Table> */

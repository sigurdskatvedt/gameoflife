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
};

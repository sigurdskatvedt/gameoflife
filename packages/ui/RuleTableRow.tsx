import { Rule } from "types/Rule";
import Link from "next/link";

export type RuleTableRowProps = {
  rule: Rule;
};

export const RuleTableRow: React.FC<RuleTableRowProps> = ({ rule }) => {
  return (
    <tr>
      <td className="font-bold">{rule.name}</td>
      <td>{rule.description}</td>
      <td>{rule.stateNames}</td>
      <td>{rule.others}</td>
      <td>
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href={{
            pathname: `/rule/${rule.id}`,
          }}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

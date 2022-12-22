import { Table } from "flowbite-react";
import { Rule } from "types/Rule";
import Link from "next/link";

interface Props {
  rule: Rule;
}

export const RuleTableRow: React.FunctionComponent<Props> = ({ rule }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {rule.name}
      </Table.Cell>
      <Table.Cell>{rule.description}</Table.Cell>
      <Table.Cell>{rule.stateNames}</Table.Cell>
      <Table.Cell>{rule.others}</Table.Cell>
      <Table.Cell>
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href={{
            pathname: `/rule/[ruleId]`,
            query: { ruleId: rule.id },
          }}
        >
          Edit
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

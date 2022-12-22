import { Card } from "flowbite-react";
import { Rule } from "types";

interface Props {
  rule: Rule;
}

export const UiRuleCard: React.FunctionComponent<Props> = ({ rule }) => {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {rule.name}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">Description: </span>
        <Card>{rule.description}</Card>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">
          Possible <span>state</span> of cells:{" "}
        </span>
        {rule.stateNames.map((state) => (
          <Card>{state.charAt(0).toUpperCase() + state.slice(1)}</Card>
        ))}
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">
          State of cells not affected by rule:{" "}
        </span>
        <Card>
          {rule.stateNames[rule.others].charAt(0).toUpperCase() +
            rule.stateNames[rule.others].slice(1)}
        </Card>
      </div>
    </Card>
  );
};

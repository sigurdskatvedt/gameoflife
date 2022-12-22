import { Accordion, Card } from "flowbite-react";
import { LoaderNoResultError } from "graphql-config";
import { Chunk, Cond, Rule } from "types";

interface Props {
  chunk: Chunk;
  chunkNumber: number;
  states: string[];
}

export const UiAccordionItem: React.FunctionComponent<Props> = ({
  chunk,
  chunkNumber,
  states,
}) => {
  const cond: Cond = chunk.conds[0];

  let stateString = states[cond.states[0]];
  if (cond.states.length != 1) {
    for (let i = 1; i < cond.states.length - 1; i++) {
      stateString += " or" + states[cond.states[i]];
    }
  }

  let neighbourString: string = cond.nbr[0].toString();
  if (cond.nbr.length != 1) {
    for (let i = 1; i < cond.nbr.length; i++) {
      neighbourString += " or " + cond.nbr[i];
    }
  }

  return (
    <>
      <Accordion.Title>Chunk {chunkNumber}</Accordion.Title>
      <Accordion.Content>
        <div className="mb-2 text-gray-500 dark:text-gray-400">
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <span className="pr-2 text-xl font-bold">
              New state for cells affected by rule:{" "}
            </span>
            <Card>
              <span className="inline font-bold">{states[chunk.newState]}</span>
            </Card>
          </div>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <span className="pr-2 text-xl font-bold">Conditions: </span>
            <Card>
              <div className="inline">
                If cell is{" "}
                <span className="inline font-bold">{stateString} </span>
                and it has
                <span className="inline font-bold"> {neighbourString} </span>
                neighbour(s) whose state(s) are
                <span className="inline font-bold">
                  {" "}
                  {states[cond.nbgStates]}{" "}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Accordion.Content>
    </>
  );
};

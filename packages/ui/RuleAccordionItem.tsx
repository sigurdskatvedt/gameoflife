import { Chunk, Cond } from "types";

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
      <div
        tabIndex={0}
        className="collapse-plus border-base-300 bg-base-100 rounded-box collapse border"
      >
        <div className="collapse-title text-xl font-medium">
          Chunk {chunkNumber}
        </div>
        <div className="collapse-content">
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <span className="p-4 text-xl font-bold">
                New state for cells affected by rule:{" "}
              </span>

              <div className="card bg-base-100 mb-2 mt-2 w-full p-4 shadow-md">
                <span className="font-bold">{states[chunk.newState]}</span>
              </div>
            </div>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <span className="p-4 text-xl font-bold">Conditions: </span>
              <div className="card bg-base-100 w-full p-4 shadow-md">
                <div className="mb-2 mt-2">
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
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

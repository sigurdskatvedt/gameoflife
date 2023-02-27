"use client";
import { useState, FormEventHandler } from "react";
import { Rule } from "types";

interface Props {
  rule?: Rule;
}

export const UiRuleCard: React.FunctionComponent<Props> = ({ rule }) => {
  let [stateList, setStateList] = useState<string[]>([]);
  let [newState, setNewState] = useState("");

  const stateInput: FormEventHandler<HTMLInputElement> | undefined = (e) => {
    e.preventDefault();
    setStateList((oldArray) => [...oldArray, newState]);
  };

  if (rule) {
    setStateList(rule.stateNames);
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {rule ? rule.name : null}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">Description: </span>
        <textarea
          className="textarea"
          id="description"
          defaultValue={rule ? rule.description : ""}
          placeholder={rule ? "" : "Give description for rule"}
          required={true}
          rows={3}
        />
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">
          Possible state of cells:{" "}
        </span>
        {stateList
          ? stateList.map((state) => (
              <div className="card bg-base-100 w-96 shadow-xl">
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </div>
            ))
          : null}

        <form onSubmit={stateInput}>
          <input
            type="text"
            id="newState"
            className="input margin-l-2 w-full max-w-xs"
            placeholder="new state"
            required={true}
            onChange={(e) => {
              newState = e.target.value;
            }}
          />
        </form>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">
          State of cells not affected by rule:{" "}
        </span>
        <div className="card bg-base-100 w-96 shadow-xl">
          {rule
            ? rule.stateNames[rule.others].charAt(0).toUpperCase() +
              rule.stateNames[rule.others].slice(1)
            : null}
        </div>
      </div>
    </div>
  );
};

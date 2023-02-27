"use client"
import { useState, FormEventHandler } from "react"
import { Rule } from "types"

interface Props {
  rule?: Rule
}

export const UiRuleCard: React.FunctionComponent<Props> = ({ rule }) => {
  let [stateList, setStateList] = useState<string[]>(rule!.stateNames)
  let [newState, setNewState] = useState("")

  const stateInput: FormEventHandler<HTMLInputElement> | undefined = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    setStateList(oldArray => [...oldArray, newState])
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
          ? stateList.map(state => (
              <div className="card w-96 bg-base-100 shadow-xl">
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </div>
            ))
          : null}

        {/* 
// @ts-expect-error*/}
        <form onSubmit={stateInput}>
          <input
            type="text"
            id="newState"
            className="margin-l-2 input w-full max-w-xs"
            placeholder="new state"
            required={true}
            onChange={e => {
              newState = e.target.value
            }}
          />
        </form>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <span className="pr-2 text-xl font-bold">
          State of cells not affected by rule:{" "}
        </span>
        <div className="card w-96 bg-base-100 shadow-xl">
          {rule
            ? rule.stateNames[rule.others].charAt(0).toUpperCase() +
              rule.stateNames[rule.others].slice(1)
            : null}
        </div>
      </div>
    </div>
  )
}

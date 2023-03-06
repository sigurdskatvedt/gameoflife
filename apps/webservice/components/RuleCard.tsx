"use client"
import { useState, FormEventHandler } from "react"
import { Rule } from "types"

interface Props {
  rule?: Rule
  editable: boolean
}

export const UiRuleCard: React.FunctionComponent<Props> = ({
  rule,
  editable,
}) => {
  let [newState, setNewState] = useState("")

  let stateList: string[] = []

  if (rule) {
    stateList = rule.stateNames
  } else {
    let rule: Rule = {
      name: "",
      stateNames: [],
      others: 0,
      chunks: [],
    }
  }

  const stateInput: FormEventHandler<HTMLInputElement> | undefined = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    stateList.push(newState)
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <h5 className="p-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        <input
          className={rule ? "" : "input-bordered input w-full"}
          disabled={!editable}
          placeholder={rule ? "" : "Title of rule"}
          defaultValue={rule ? rule.name : ""}
          onSubmit={e => {
            rule!.name = (e.target as HTMLInputElement).value
          }}
        ></input>
      </h5>
      <div className="w-full p-4 font-normal text-gray-700 dark:text-gray-400">
        <span className="block p-2 text-xl font-bold">Description: </span>
        <textarea
          className="border-1 textarea w-full border-gray-400"
          id="description"
          disabled={!editable}
          onSubmit={e => {
            if (rule) {
              rule.description = (e.target as HTMLTextAreaElement).value
            }
          }}
          defaultValue={rule ? rule.description : ""}
          placeholder={rule ? "" : "Give description for rule"}
          required={true}
          rows={3}
        />
      </div>
      <div className="p-4 font-normal text-gray-700 dark:text-gray-400">
        <span className="p-2 text-xl font-bold">Possible state of cells: </span>
        {stateList
          ? stateList.map(state => (
              <div className="card w-full border-b-4 bg-base-100 p-2 shadow-xl">
                {state.charAt(0).toUpperCase() + state.slice(1)}
              </div>
            ))
          : null}
        {editable ? (
          // @ts-expect-error
          <form className="mt-4" onSubmit={stateInput}>
            <input
              type="text"
              id="newState"
              className="input w-full border-b-4 p-4"
              placeholder="New state"
              required={true}
              onChange={e => {
                newState = e.target.value
              }}
            />
          </form>
        ) : null}
      </div>
      <div className="p-4 font-normal text-gray-700 dark:text-gray-400">
        <div className="flex justify-between p-4 ">
          <span className="text-xl font-bold">
            State of cells not affected by rule:{" "}
          </span>
          <button className="btn-outline btn text-blue-400">+</button>
        </div>
        <div className="card w-full bg-base-100 p-2 shadow-xl">
          {rule
            ? rule.stateNames[rule.others].charAt(0).toUpperCase() +
              rule.stateNames[rule.others].slice(1)
            : null}
        </div>
      </div>
    </div>
  )
}

"use client"
import { UiNavbar } from "ui"

function CreatePage() {
  return (
    <>
      <UiNavbar></UiNavbar>
      <div className="grid grid-cols-3 divide-x p-2">
        <div className="p-2">{/* <UiRuleCard></UiRuleCard> */}</div>
        <div className="col-span-2 p-2">
          {/* <UiRuleAccordion rule={rule}></UiRuleAccordion> */}
        </div>
      </div>
    </>
  )
}

export default CreatePage

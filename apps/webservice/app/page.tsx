import { UiTable } from "ui"
import { UiNavbar } from "ui/Navbar"

// force this page to be dynamically re-rendered each time as it depends on from it's the api server
export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <>
      <UiNavbar></UiNavbar>
      {/* 
// @ts-expect-error*/}
      <UiTable></UiTable>
    </>
  )
}

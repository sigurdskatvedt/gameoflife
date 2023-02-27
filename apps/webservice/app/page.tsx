import { UiTable } from "ui"
import { UiNavbar } from "ui/Navbar"

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

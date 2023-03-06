import type { Metadata } from "next"
import { UiTable } from "ui"
import { UiNavbar } from "ui/Navbar"

// force this page to be dynamically re-rendered each time as it depends on from it's the api server
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Game of Life - Rules",
  description: "Here you can manage the rules for Game of Life",
}

export default function Page() {
  return (
    <>
      {/* 
// @ts-expect-error*/}
      <UiTable></UiTable>
    </>
  )
}

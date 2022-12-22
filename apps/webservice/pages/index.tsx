import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { Rule } from "types"
import { UiNavbar, UiTable } from "ui"
import client from "../lib/apollo-client"

const MyPage = () => {
  return (
    <>
      <UiNavbar></UiNavbar>
      <UiTable></UiTable>
    </>
  )
}

export default MyPage

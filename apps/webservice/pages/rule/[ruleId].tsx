import gql from "graphql-tag"
import { Rule } from "types"
import { UiNavbar, UiRuleAccordion, UiRuleCard } from "ui"
import client from "../../lib/apollo-client"

interface Props {
  rule: Rule
}

function RuleComponent({ rule }: Props) {
  return (
    <>
      <UiNavbar></UiNavbar>
      <div className="grid grid-cols-3 divide-x p-2">
        <div className="p-2">
          <UiRuleCard rule={rule}></UiRuleCard>
        </div>
        <div className="col-span-2 p-2">
          <UiRuleAccordion rule={rule}></UiRuleAccordion>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: {
  params: { ruleId: string[] }
}) {
  const id = String(
    Array.isArray(context.params.ruleId)
      ? context.params.ruleId[0]
      : context.params.ruleId
  )
  const { data } = await client.query({
    query: gql`
      query RuleQuery($ruleId: String!) {
        uniqueRule(ruleId: $ruleId) {
          id
          description
          name
          others
          stateNames
          chunks {
            id
            newState
            conds {
              id
              nbgStates
              nbr
              states
            }
          }
        }
      }
    `,
    variables: { ruleId: id },
  })
  const rule = data.uniqueRule
  return {
    props: {
      rule,
    },
  }
}

export default RuleComponent

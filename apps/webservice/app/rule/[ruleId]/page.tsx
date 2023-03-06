import gql from "graphql-tag"
import { Rule } from "types"
import { UiNavbar, UiRuleAccordion, getRule } from "ui"
import { UiRuleCard } from "../../../components/RuleCard"

const ruleQuery = gql(`
query RuleQuery($ruleId: String!) {
    uniqueRule(ruleId: $ruleId) {
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
      description
      name
      id
      others
      stateNames
    }
  }`)

async function RuleComponent(_props: any) {
  const rule: Rule = await getRule(_props.params.ruleId, ruleQuery)

  return (
    <>
      <div className="grid grid-cols-3 divide-x p-2">
        <div className="p-2">
          <UiRuleCard rule={rule} editable={false}></UiRuleCard>
        </div>
        <div className="col-span-2 p-2">
          <UiRuleAccordion rule={rule} editable={false}></UiRuleAccordion>
        </div>
      </div>
    </>
  )
}

export default RuleComponent

import { Accordion } from "flowbite-react";
import { Chunk, Rule } from "types";
import { UiAccordionItem } from "./RuleAccordionItem";
import client from "../../apps/webservice/lib/apollo-client";
import { gql, useQuery } from "@apollo/client";

interface Props {
  rule: Rule;
}

const chunksQuery = gql`
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
    }
  }
`;

export const UiRuleAccordion: React.FunctionComponent<Props> = ({ rule }) => {
  return (
    <>
      <Accordion alwaysOpen={true}>
        {rule.chunks.map((chunk: Chunk, i: number) => (
          <Accordion.Panel>
            <UiAccordionItem chunk={chunk} chunkNumber={i}></UiAccordionItem>
          </Accordion.Panel>
        ))}
      </Accordion>
    </>
  );
};

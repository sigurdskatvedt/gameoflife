import { Chunk, Rule } from "types";
import { UiAccordionItem } from "./RuleAccordionItem";
import { gql } from "graphql-request";

interface Props {
  rule: Rule;
  editable: boolean;
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
      {rule.chunks.map((chunk: Chunk, i: number) => (
        <UiAccordionItem
          chunk={chunk}
          chunkNumber={i}
          key={i}
          states={rule.stateNames}
        ></UiAccordionItem>
      ))}
    </>
  );
};

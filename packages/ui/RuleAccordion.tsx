import { Chunk, Rule } from "types";
import { UiAccordionItem } from "./RuleAccordionItem";

interface Props {
  rule: Rule;
}

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

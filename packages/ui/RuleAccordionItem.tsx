import { Accordion } from "flowbite-react";
import { Chunk, Rule } from "types";

interface Props {
  chunk: Chunk;
  chunkNumber: number;
}

export const UiAccordionItem: React.FunctionComponent<Props> = ({
  chunk,
  chunkNumber,
}) => {
  return (
    <>
      <Accordion.Title>Chunk {chunkNumber}</Accordion.Title>
      <Accordion.Content>
        <div className="mb-2 text-gray-500 dark:text-gray-400">
          {chunk.newState}
        </div>
      </Accordion.Content>
    </>
  );
};

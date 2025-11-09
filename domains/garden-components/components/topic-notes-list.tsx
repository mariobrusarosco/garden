"use client";

import { useListSearcher } from "@/domains/garden-components/hooks/use-list-search";
import { Card } from "@/domains/garden-components/components/card";
import type { TopicCategory } from "@/types/topic-metadata";

interface Props {
  notes: string[];
  topicCategory: TopicCategory;
  topicSummary: string;
  topicIcon?: string;
  topicSlug: string;
}

export const TopicNotesList = ({
  notes,
  topicCategory,
  topicSummary,
  topicIcon,
  topicSlug,
}: Props) => {
  const { handleInputChange, filteredList, term } = useListSearcher(notes);

  return (
    <ul
      data-ui="list-of-notes"
      className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {filteredList.map((filename: string) => {
        const noteSlug = filename.split(".mdx")[0];

        return (
          <li key={noteSlug}>
            <Card
              href={`/topics/${topicSlug}/note/${noteSlug}`}
              title={noteSlug}
              category={topicCategory}
              useLeafIcon
            />
          </li>
        );
      })}
    </ul>
  );
};

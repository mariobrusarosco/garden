"use client";

import { useListSearcher } from "@/domains/garden-components/hooks/use-list-search";
import { TopicCard } from "@/domains/garden-components/components/topic-card";
import { ListSearcher } from "@/domains/garden-components/components/list-search";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import type { TopicCategory } from "@/types/topic-metadata";

interface Props {
  notes: string[];
  topicCategory: TopicCategory;
  topicSummary: string;
  topicIcon?: string;
}

export const TopicNotesList = ({
  notes,
  topicCategory,
  topicSummary,
  topicIcon,
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
          <TopicCard
            key={noteSlug}
            slug={noteSlug}
            category={topicCategory}
            summary={topicSummary}
            icon={topicIcon}
          />
        );
      })}
    </ul>
  );
};

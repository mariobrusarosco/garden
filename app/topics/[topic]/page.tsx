"use client";
import { use } from "react";
import { PageHeading } from "@/domains/garden-components/page-heading";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import topics from "@/metadata-topics.json";
import type { TopicsMetadata } from "@/types/topic-metadata";
import { TopicNotesList } from "@/domains/garden-components/components/topic-notes-list";
import { ListSearcher } from "@/domains/garden-components/components/list-search";
import { useListSearcher } from "@/domains/garden-components/hooks/use-list-search";

interface Props {
  params: Promise<{ topic: string }>;
}

const typedTopics = topics as TopicsMetadata;

export default function TopicScreen({ params }: Props) {
  const resolvedParams = use(params);
  const topicData = typedTopics[resolvedParams.topic];
  const notes = topicData?.files || [];
  const normalizedTopic = removeHyphens(resolvedParams.topic);
  const { handleInputChange, filteredList, term } = useListSearcher(notes);

  if (!topicData) {
    return <div>Topic not found</div>;
  }

  return (
    <section data-ui="screen-topic" className="global-spacing">
      <PageHeading title={normalizedTopic} subtitle={topicData.summary}>
        <ListSearcher onInputChange={handleInputChange} term={term} />
      </PageHeading>

      <div data-ui="list-of-notes" className="global-spacing">
        <TopicNotesList
          notes={filteredList}
          topicCategory={topicData.category}
          topicSummary={topicData.summary}
          topicIcon={topicData.icon}
          topicSlug={resolvedParams.topic}
        />
      </div>
    </section>
  );
}

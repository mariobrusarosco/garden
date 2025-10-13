"use client";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import topics from "@/metadata-topics.json";
import { ListSearch } from "@/domains/garden-components/components/list-search";
import { useListSearch } from "@/domains/garden-components/hooks/use-list-search";
import { TopicCard } from "@/domains/garden-components/components/topic-card";
import type { TopicsMetadata } from "@/types/topic-metadata";

const typedTopics = topics as TopicsMetadata;

export default function TopicsScreen() {
  const topicEntries = Object.entries(typedTopics);
  const topicSlugs = topicEntries.map(([slug]) => slug);
  
  const { handleInputChange, filteredList, term } = useListSearch(topicSlugs);

  // Filter topic entries based on search
  const filteredTopics = topicEntries.filter(([slug]) => filteredList.includes(slug));

  return (
    <main data-ui="screen-topics" className="global-spacing h-full">
      <section className="heading text-dark-pink mt-4 mb-10">
        <div className="flex justify-between items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-7xl font-serif">Topics</h2>
          <ListSearch onInputChange={handleInputChange} term={term} />
        </div>
      </section>

      <section data-ui="latest" className="flex gap-x-4 p-2 [&>h3]:pb-1 [&>h3]:border-b-2 [&>h3]:border-transparent [&>h3]:cursor-pointer [&>h3:hover]:border-forest-green">
        <h3 data-ui="all-topics-heading">All</h3>
        <h3 data-ui="tools-and-libraries-heading">Tools</h3>
        <h3 data-ui="frameworks-heading">Frameworks</h3>
        <h3 data-ui="languages-heading">Languages</h3>
        <h3 data-ui="concepts-heading">Concepts</h3>
        <h3 data-ui="patterns-heading">Patterns</h3>
        <h3 data-ui="latest-topics-heading">Latest</h3>
      </section>

      <section data-ui="all" className="my-8">
        <div data-ui="list-of-all-topics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map(([slug, metadata]) => (
            <TopicCard
              key={slug}
              slug={slug}
              category={metadata.category}
              summary={metadata.summary}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

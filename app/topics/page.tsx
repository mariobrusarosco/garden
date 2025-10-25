"use client";
import { useState } from "react";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import topics from "@/metadata-topics.json";
import { ListSearch } from "@/domains/garden-components/components/list-search";
import { useListSearch } from "@/domains/garden-components/hooks/use-list-search";
import { TopicCard } from "@/domains/garden-components/components/topic-card";
import type { TopicsMetadata, TopicCategory } from "@/types/topic-metadata";
import { cn } from "@/domains/helper-and-utils/classnames";

const typedTopics = topics as TopicsMetadata;

type CategoryFilter = TopicCategory | "all";

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tools", label: "Tools" },
  { id: "frameworks", label: "Frameworks" },
  { id: "languages", label: "Languages" },
  { id: "concepts", label: "Concepts" },
  { id: "patterns", label: "Patterns" },
];

export default function TopicsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  
  const topicEntries = Object.entries(typedTopics);
  const topicSlugs = topicEntries.map(([slug]) => slug);
  
  const { handleInputChange, filteredList, term } = useListSearch(topicSlugs);

  // Filter by search and category
  const filteredTopics = topicEntries.filter(([slug, metadata]) => {
    const matchesSearch = filteredList.includes(slug);
    const matchesCategory = selectedCategory === "all" || metadata.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main data-ui="screen-topics" className="global-spacing h-full">
      <section className="heading text-dark-pink mt-4 mb-10">
        <div className="flex justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-7xl font-serif">Topics</h2>
          <ListSearch onInputChange={handleInputChange} term={term} />
        </div>
      </section>

      <section data-ui="category-tabs" className="flex gap-x-4 p-2 [&>h3]:pb-1 [&>h3]:border-b-2 [&>h3]:border-transparent [&>h3]:cursor-pointer [&>h3:hover]:border-forest-green">
        {CATEGORY_TABS.map((tab) => (
          <h3
            key={tab.id}
            data-ui={`${tab.id}-topics-heading`}
            className={cn(selectedCategory === tab.id && "border-forest-green")}
            onClick={() => setSelectedCategory(tab.id)}
          >
            {tab.label}
          </h3>
        ))}
      </section>

      <section data-ui="all" className="my-8">
        <div data-ui="list-of-all-topics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map(([slug, metadata]) => (
            <TopicCard
              key={slug}
              slug={slug}
              category={metadata.category}
              summary={metadata.summary}
              icon={metadata.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

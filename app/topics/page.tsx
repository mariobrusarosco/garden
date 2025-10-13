"use client";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import topics from "@/metadata-topics.json";
import Link from "next/link";
import { ListSearch } from "@/domains/garden-components/components/list-search";
import { useListSearch } from "@/domains/garden-components/hooks/use-list-search";

export default function TopicsScreen() {
  const { handleInputChange, filteredList, term } = useListSearch(Object.keys(topics));

  return (
    <main data-ui="screen-topics" className="global-spacing h-full">
      <section className="heading text-dark-pink mt-4 mb-10">
        <div className="flex  justify-between items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-7xl font-serif ">Topics</h2>
          <ListSearch onInputChange={handleInputChange} term={term} />
        </div>
      </section>

      <section data-ui="latest" className="flex gap-x-4 p-2 [&>h3]:pb-1 [&>h3]:border-b-2 [&>h3]:border-transparent [&>h3]:cursor-pointer [&>h3:hover]:border-forest-green">
      <h3 data-ui="all-topics-heading">All</h3>
      <h3 data-ui="tools-and-libraries-heading">Tools and Libraries</h3>
      <h3 data-ui="frameworks-heading">Frameworks</h3>
      <h3 data-ui="databases-heading">Languages</h3>
      <h3 data-ui="databases-heading">Concepts</h3>
      <h3 data-ui="patterns-heading">Patterns</h3>
      <h3 data-ui="latest-topics-heading">Latest</h3>
      </section>


      <section data-ui="all">

        <ul data-ui="list-of-all-topics" className="flex flex-wrap gap-x-3 gap-y-5 my-2 justify-center lg:gap-y-10">
          {filteredList.map((topic) => (
            <li key={topic}>
              <Link
                className="rounded-lg border border-midnight-blue p-2 text-midnight-blue uppercase font-sans font-light text-sm cursor-pointer w-max"
                href={`topics/${topic}`}
              >
                {removeHyphens(topic)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

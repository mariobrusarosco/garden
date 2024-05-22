import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import metadata from "@/metadata.json";
import Link from "next/link";

export default function Topics() {
  return (
    <main className="container global-spacing">
      <section className="heading text-wenge mb-8">
        <div className="flex font-light justify-start items-center gap-x-3">
          <IconLeaf className="min-w-6" />
          <h2 className="text-5xl font-serif my-10 ">Topics</h2>
        </div>
      </section>

      <section className="list-of-topics">
        <ul className="flex flex-wrap gap-4 my-2">
          {Object.keys(metadata).map((topic) => (
            <li
              className="rounded-lg border border-wenge p-2 text-wenge uppercase font-sans font-light text-sm cursor-pointer"
              key={topic}
            >
              <Link href={`/topics/${topic}`}>{topic}</Link>
            </li>
          ))}
          {/* {featuredTopics.map((topic) => (
            <li
              className="rounded-lg border border-wenge p-2 text-wenge uppercase font-sans font-light text-sm cursor-pointer"
              key={topic}
            >
              {topic}
            </li>
          ))} */}
        </ul>
      </section>
    </main>
  );
}

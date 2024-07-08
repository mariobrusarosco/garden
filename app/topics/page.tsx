import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import metadata from "@/metadata.json";
import Link from "next/link";

export default function Topics() {
  return (
    <section className="global-spacing h-full grid place-content-center">
      <section className="heading text-wenge mt-4 mb-10">
        <div className="flex font-light justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-5xl font-serif ">Topics</h2>
        </div>
      </section>

      <section data-ui="list-of-topics">
        <ul className="flex flex-wrap gap-x-3 gap-y-5 my-2 justify-center ">
          {Object.keys(metadata).map((topic) => (
            <li key={topic}>
              <Link
                className="rounded-lg border border-wenge p-2 text-wenge uppercase font-sans font-light text-sm cursor-pointer w-max"
                href={`/topics/${topic}`}
              >
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

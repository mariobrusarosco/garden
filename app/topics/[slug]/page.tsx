import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";
import { MDXParser } from "@/domains/garden-components/mdx-parser";
import { IconFlower } from "@/domains/garden-components/icons/flower";
import metadata from "@/metadata.json";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const notesByTopic = metadata as { [key: string]: string[] };
export default async function TopicsSlug({ params }: Props) {
  const notes = notesByTopic[params.slug];

  return (
    <div className="container global-spacing">
      <div className="list-of-notes pt-10 text-wenge">
        <p className="font-sans font-thin text-2xl mb-2">
          All this this notes are related to{" "}
        </p>
        <p className="text-5xl font-serif font-thin uppercase">{params.slug}</p>

        <ul className="mt-10">
          {notes.map((filename: string) => {
            const parsedNote = filename.split(".mdx")[0];

            return (
              <li
                key={parsedNote}
                className="flex items-center gap-x-2 my-3 cursor-pointer"
              >
                <IconLeaf className="w-4" />
                <Link
                  href={`/topic/${parsedNote}`}
                  className="text-wenge font-serif font-thin text-sm"
                >
                  {parsedNote}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

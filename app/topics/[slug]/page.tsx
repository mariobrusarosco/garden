import metadata from "@/metadata.json";
import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import Link from "next/link";
import { GoBack } from "@/domains/garden-components/go-back";
import { PageHeading } from "@/domains/garden-components/page-heading";

type Props = {
  params: {
    slug: string;
  };
};

const notesByTopic = metadata as { [key: string]: string[] };

export default async function TopicsSlug({ params }: Props) {
  const topicNotes = notesByTopic[params.slug];

  return (
    <div data-ui="note-by-topic-page" className="global-spacing">
      <PageHeading title={params.slug} />

      <div className="list-of-notes">
        <ul className="mt-10 grid gap-y-8 md:grid-cols-2">
          {topicNotes.map((filename: string) => {
            const noteSlug = filename.split(".mdx")[0];

            return (
              <li
                key={noteSlug}
                className="flex items-center gap-x-6 cursor-pointer"
              >
                <IconLeaf className="w-4" />
                <Link
                  href={`/topic/${noteSlug}`}
                  className="text-wenge font-serif font-thin text-xl"
                >
                  {noteSlug}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

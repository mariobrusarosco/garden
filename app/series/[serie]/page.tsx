import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { PageHeading } from "@/domains/garden-components/page-heading";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import series from "@/metadata-series.json";
import Link from "next/link";

type Props = {
  params: {
    serie: string;
  };
};

const notesBySerie = series as { [key: string]: string[] };

export default function SerieScreen({ params }: Props) {
  const normalizedSerie = removeHyphens(params.serie);
  const serieNotes = notesBySerie[params.serie];

  return (
    <main data-ui="screen-serie" className="container global-spacing">
      <PageHeading title={normalizedSerie} />

      <div className="list-of-notes">
        <ul className="mt-10 grid gap-y-8 md:grid-cols-2">
          {serieNotes.map((filename: string) => {
            const noteSlug = filename.split(".mdx")[0];
            const normalizedNote = removeHyphens(noteSlug);

            return (
              <li
                key={noteSlug}
                className="flex items-center gap-x-6 cursor-pointer"
              >
                <IconLeaf className="w-4" />
                <Link
                  href={`./${params.serie}/note/${noteSlug}`}
                  className="text-wenge font-serif font-thin text-xl"
                >
                  {normalizedNote}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

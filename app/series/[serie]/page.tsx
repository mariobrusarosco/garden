import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { PageHeading } from "@/domains/garden-components/page-heading";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import series from "@/metadata-series.json";
import type { SeriesMetadata } from "@/types/serie-metadata";
import Link from "next/link";

type Props = {
  params: Promise<{
    serie: string;
  }>;
};

const seriesData = series as SeriesMetadata;

export default async function SerieScreen({ params }: Props) {
  const resolvedParams = await params;
  const normalizedSerie = removeHyphens(resolvedParams.serie);
  const serieData = seriesData[resolvedParams.serie];
  const serieNotes = serieData?.files || [];

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
                  href={`./${resolvedParams.serie}/note/${noteSlug}`}
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

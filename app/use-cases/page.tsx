import { IconLeaf } from "@/domains/garden-components/icons/leaf";
import { SerieCard } from "@/domains/garden-components/components/serie-card";
import series from "@/metadata-series.json";
import type { SeriesMetadata } from "@/types/serie-metadata";

const typedSeries = series as SeriesMetadata;

export default function UseCaseScreen() {
  const serieEntries = Object.entries(typedSeries);

  return (
    <main data-ui="screen-use-cases" className="global-spacing h-full">
      <section className="heading text-dark-pink mt-4 mb-10">
        <div className="flex justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-7xl font-serif">Use Cases</h2>
        </div>
      </section>

      <section data-ui="list-of-use-cases" className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serieEntries.map(([slug, metadata]) => (
            <SerieCard
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

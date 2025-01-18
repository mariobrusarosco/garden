import { IconLeaf } from "@/domains/garden-components/icons/leaf";

import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";
import series from "@/metadata-series.json";
import Link from "next/link";

export default function SeriesScreen() {
  return (
    <main data-ui="screen-serie" className="container global-spacing">
      <section className="heading text-wenge mt-4 mb-10">
        <div className="flex font-light justify-start items-center gap-x-4">
          <IconLeaf className="w-5" />
          <h2 className="text-5xl font-serif">Serie</h2>
        </div>
      </section>

      <section data-ui="list-of-series">
        <ul className="flex flex-wrap gap-x-3 gap-y-5 my-2 justify-center lg:gap-y-10">
          {Object.keys(series).map((serie) => (
            <li key={serie}>
              <Link
                className="rounded-lg border border-wenge p-2 text-wenge uppercase font-sans font-light text-sm cursor-pointer w-max"
                href={`/series/${serie}`}
              >
                {removeHyphens(serie)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import Accordion from "@/domains/garden-components/accordion";
import { IconFlower } from "@/domains/garden-components/icons/flower";
import { PageHeading } from "@/domains/garden-components/page-heading";
import { MDXParser } from "@/domains/garden-dmx-components/mdx-parser";
import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";
import { removeHyphens } from "@/domains/helper-and-utils/string-manipulation";

type Props = {
  params: Promise<{
    note: string;
  }>;
};

export default async function SerieNoteScreen({ params }: Props) {
  const resolvedParams = await params;
  const { mdxContent, metadata } = parseFrontMatterFromSlug(
    `series/${resolvedParams.note}`
  );

  const hasRelatedTopics = !!metadata?.["related-topics"]?.length;
  const hasReferencesLink = !!metadata?.["reference-links"]?.length;
  const normalizedTopic = removeHyphens(resolvedParams.note);

  return (
    <div data-ui="screen-serie-note" className="global-spacing">
      <PageHeading title={normalizedTopic} />

      <div className="flex justify-between gap-4 items-start text-wenge  h-fit pb-15">
        <div className="flex gap-x-2">
          <IconFlower className="min-w-6" />
          <div className="flex flex-col gap-y-2">
            <p className="flex gap-x-2 items-baseline">
              <span className="font-semibold font-sans text-sm uppercase">
                In the ground since{" "}
              </span>
              <span className="font-serif font-thin text-md">
                {metadata["planted-in"].toDateString()}
              </span>
            </p>
            <p className="flex gap-x-2 items-baseline">
              <span className="font-semibold font-sans text-sm uppercase">
                Last watered in
              </span>
              <span className="font-serif font-thin text-md">
                {metadata["last-watered-in"].toDateString()}
              </span>
            </p>
          </div>
        </div>

        <div className="grid gap-x-4 justify-between grid-cols-2 ">
          {hasRelatedTopics ? (
            <div className="w-[400px]">
              <Accordion
                header={
                  <h2 className="text-sunken-cascades lowercase font-sans font-thin text-lg">
                    Related Topics
                  </h2>
                }
                content={
                  <ul className="flex gap-4 my-2">
                    {metadata["related-topics"].map((topic) => (
                      <li
                        className="rounded-lg bg-deep-sea-diver text-ghost-white p-2 lowecase uppercase font-sans font-light text-xs cursor-pointer"
                        key={topic}
                      >
                        <a target="_blank" href={`/topic/${topic}`}>
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              />
            </div>
          ) : null}

          {hasReferencesLink ? (
            <div className="w-[400px]">
              <Accordion
                header={
                  <h2 className="text-sunken-cascades lowercase font-sans font-thin text-lg">
                    Referece Links
                  </h2>
                }
                content={
                  <ul className="flex gap-4 my-2">
                    {metadata["reference-links"].map((link) => (
                      <li
                        className="rounded-lgbg-deep-sea-diver text-ghost-white  p-2 uppercase font-sans font-light text-xs cursor-pointer"
                        key={link.url}
                      >
                        <a href={link.url} target="_blank">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              />
            </div>
          ) : null}
        </div>
      </div>

      {await MDXParser({ source: mdxContent })}
    </div>
  );
}

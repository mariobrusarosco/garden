import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";
import { MDXParser } from "@/domains/garden-components/mdx-parser";
import { IconFlower } from "@/domains/garden-components/icons/flower";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Topic({ params }: Props) {
  const { mdxContent, metadata } = parseFrontMatterFromSlug(params.slug);

  const hasRelatedTopics = !!metadata?.["related-topics"]?.length;
  const hasReferencesLink = !!metadata?.["reference-links"]?.length;

  return (
    <div className="container global-spacing">
      <div>
        <h2 className="text-wenge font-serif font-thin text-5xl pb-6 my-4">
          {metadata.title}
        </h2>

        {hasRelatedTopics ? (
          <div className="bg-puce-800 p-4 rounded-lg mb-4">
            <h2 className="text-wenge lowercase font-sans font-thin text-lg">
              Related Topics
            </h2>
            <ul className="flex gap-4 my-2">
              {metadata["related-topics"].map((topic) => (
                <li
                  className="rounded-lg bg-misty_rose-700 p-2 text-wenge lowecase uppercase font-sans font-light text-xs"
                  key={topic}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasReferencesLink ? (
          <div className="bg-puce-800 p-4 rounded-lg mb-8">
            <h2 className="text-wenge lowercase font-sans font-thin text-lg">
              Referece Links
            </h2>
            <ul className="flex gap-4 my-2">
              {metadata["reference-links"].map((link) => (
                <li
                  className="rounded-lg bg-misty_rose-700 p-2 text-wenge uppercase font-sans font-light text-xs"
                  key={link.url}
                >
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="flex gap-x-4 items-center text-wenge mb-8">
          <IconFlower className="min-w-6" />
          <div className="flex flex-col">
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

        <MDXParser source={mdxContent} />
      </div>
    </div>
  );
}

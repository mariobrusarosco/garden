import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";
import { MDXParser } from "@/domains/garden-components/mdx-parser";

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
        <h1 className="font-serif font-thin text-5xl pb-6">{metadata.title}</h1>
        <p className="font-sans text-md">
          <span>author: </span>
          {metadata.author.url ? (
            <a
              href={metadata.author.url}
              target="_blank"
              rel="noreferrer noopener"
              className=" text-indigo-700 ml-1"
            >
              {metadata.author.name}
            </a>
          ) : null}
        </p>
        <p className="text-xs">
          <span className="font-semibold">Planted in </span>
          <span className="text-xs italic">
            {metadata["planted-in"].toDateString()}
          </span>
        </p>
        <p className="text-xs">
          <span className="font-semibold">Last watered in</span>
          <span className="text-xs italic">
            {metadata["last-watered-in"].toDateString()}
          </span>
        </p>
        <MDXParser source={mdxContent} />
      </div>

      <div>
        {hasRelatedTopics ? (
          <div>
            <h2>Related Topics</h2>
            <ul>
              {metadata["related-topics"].map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasReferencesLink ? (
          <div>
            <h2>Reference Links</h2>
            <ul>
              {metadata["reference-links"].map((link) => (
                <li key={link?.text}>
                  <a href={link?.url} target="_blank" rel="noreferrer">
                    {link?.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

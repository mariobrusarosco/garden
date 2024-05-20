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
    <div className="container pt-20">
      <div>
        <h1 className="text-5xl pb-6">{metadata.title}</h1>
        <p className="text-sm">
          {metadata.author.name}
          {metadata.author.url ? (
            <a
              href={metadata.author.url}
              target="_blank"
              className="text-xs text-indigo-700 ml-1"
            >
              (link)
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

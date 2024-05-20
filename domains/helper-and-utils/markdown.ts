import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";

// ? [IMPROVEMENT]: Type the dynamic return value of data property
// so we can check data.author?.name when data is { auhtor: { name: "John" }
type FrontMatterProps = {
  author: {
    name: string;
    url: string;
  };
  title: string;
  "planted-in": Date;
  "last-watered-in": Date;
  "related-topics": string[];
  "reference-links": { text: string; url: string }[];
};

export const parseFrontMatterFromSlug = (slug: string) => {
  const filepath = path.join(
    process.cwd(),
    `/domains/garden-content/${slug}.mdx`
  );
  ("utf8");

  const { content: mdxContent, data } = matter.read(filepath);
  const metadata = data as FrontMatterProps;

  return { mdxContent, metadata };
};

export const getFileContentFromSlug = async (slug: string) => {
  if (!slug) return "";

  const file = await fs.readFile(
    path.join(process.cwd(), `/domains/garden-content/${slug}.mdx`),
    "utf8"
  );

  return file;
};

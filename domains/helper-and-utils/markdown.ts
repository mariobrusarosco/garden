import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";

// ? [IMPROVEMENT]: Type the dynamic return value of data property
// so we can check data.author?.name when data is { auhtor: { name: "John" }

export const parseFrontMatterFromSlug = (slug: string) => {
  const filepath = path.join(
    process.cwd(),
    `/domains/garden-content/${slug}.mdx`
  );
  ("utf8");

  const { content: mdxContent, data } = matter.read(filepath);

  return { mdxContent, data };
};

export const getFileContentFromSlug = async (slug: string) => {
  if (!slug) return "";

  const file = await fs.readFile(
    path.join(process.cwd(), `/domains/garden-content/${slug}.mdx`),
    "utf8"
  );

  return file;
};

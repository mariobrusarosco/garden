import path from "path";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Plant({ params }) {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text";
  //   const mdxSource = await serialize(source);
  console.log({ params });

  const content = await fs.readFile(
    path.join(process.cwd(), `/app/content/${params.slug}.mdx`),
    "utf8"
  );

  console.log({ content });

  return (
    <>
      <h2>Plant!</h2>
      <MDXRemote source={content} />
    </>
  );
}

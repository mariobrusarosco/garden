import { MDXRemote } from "next-mdx-remote/rsc";
import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Plant({ params }: Props) {
  const { mdxContent, data } = parseFrontMatterFromSlug(params.slug);

  return (
    <>
      <h2>Plant!</h2>

      <div>
        <p>date: {data.date}</p>
        <p>author: {data.author?.name}</p>
        <p>title: {data.title}</p>
      </div>
      <MDXRemote source={mdxContent} />
    </>
  );
}

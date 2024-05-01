import { parseFrontMatterFromSlug } from "@/domains/helper-and-utils/markdown";
import { MDXParser } from "@/domains/components/mdx-parser";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Plant({ params }: Props) {
  const { mdxContent, data } = parseFrontMatterFromSlug(params.slug);

  return (
    <>
      <div>
        <p>date: {data.date}</p>
        <p>author: {data.author?.name}</p>
        <p>title: {data.title}</p>
      </div>
      <MDXParser source={mdxContent} />
    </>
  );
}

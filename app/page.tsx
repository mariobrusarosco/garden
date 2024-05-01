import { MDXParser } from "@/domains/components/mdx-parser";

export default function Home() {
  return (
    <MDXParser
      source={` 
      # Home!
      ## Hello World

      This is from Server Components!
      `}
    />
  );
}

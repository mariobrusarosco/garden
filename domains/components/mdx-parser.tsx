import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Heading1 } from "./heading-1";
import { CodeSnippet } from "./code-snippet";

const MAPPED_COMPONENTS = {
  img: (props: any) => (
    <Image
      alt="lorem"
      width={600}
      height={400}
      style={{ maxWidth: "100%", height: "auto" }}
      {...props}
    />
  ),
  h1: Heading1,
  h2: (props: any) => <p style={{ color: "dodgerblue" }} {...props} />,
  pre: CodeSnippet,
};

export function MDXParser(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...MAPPED_COMPONENTS,
        ...(props.components || {}),
      }}
    />
  );
}

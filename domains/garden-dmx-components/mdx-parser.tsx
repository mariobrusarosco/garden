import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Heading1 } from "./heading-1";
import { CodeSnippet } from "./code-snippet";
import { Heading2 } from "./heading-2";
import { Callout } from "./callout";
import { Heading3 } from "./heading-3";

import { Quote } from "./quote";
import { InlineCode } from "./inline-code";
import { OrderedList } from "./ordered-list";
import { Paragraph } from "./paragraph";
import { UnorderedList } from "./unordered-list";

const MAPPED_COMPONENTS: MDXRemoteProps["components"] = {
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
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  blockquote: Quote,
  ol: OrderedList,
  ul: UnorderedList,
  pre: CodeSnippet,
  CodeSnippet,
  code: InlineCode,
  Callout,
  Quote,
};

// TODO Type 'props' correctly
export function MDXParser(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{
        ...MAPPED_COMPONENTS,
      }}
    />
  );
}

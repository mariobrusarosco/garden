import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";

const MAPPED_COMPONENTS = {
  img: (props: any) => (
    <Image alt="lorem" style={{ maxWidth: "100%" }} {...props} />
  ),
  h1: (props: any) => <h1 style={{ color: "tomato" }} {...props} />,
  h2: (props: any) => <p style={{ color: "dodgerblue" }} {...props} />,
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

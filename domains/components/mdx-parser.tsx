import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

const MAPPED_COMPONENTS = {
  img: (props) => <img style={{ maxWidth: "100%" }} {...props} />,
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  h2: (props) => <p style={{ color: "dodgerblue" }} {...props} />,
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

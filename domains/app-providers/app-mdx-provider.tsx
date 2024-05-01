"use client";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import Image from "next/image";

const components = {
  img: (props: any) => (
    <Image alt="Lorem Ipsum" style={{ maxWidth: "100%" }} {...props} />
  ),
  h1: (props: any) => <h1 style={{ color: "tomato" }} {...props} />,
  h2: (props: any) => <p style={{ color: "dodgerblue" }} {...props} />,
};

const AppMDXProvider = ({ children }: { children: ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export { AppMDXProvider };

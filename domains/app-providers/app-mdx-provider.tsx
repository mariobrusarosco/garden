"use client";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

const components = {
  img: (props) => <img style={{ maxWidth: "100%" }} {...props} />,
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  h2: (props) => <p style={{ color: "dodgerblue" }} {...props} />,
};

const AppMDXProvider = ({ children }: { children: ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export { AppMDXProvider };

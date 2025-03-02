// "use client";
import { Code } from "bright";

Code.lineNumbers = true;

const CodeSnippet = (props: any) => {
  return (
      <Code data-ui="code-snippet" className="overflow-auto" {...props} />
  );
};

export { CodeSnippet };

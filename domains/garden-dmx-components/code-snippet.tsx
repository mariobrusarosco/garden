import { Code } from "bright";

Code.lineNumbers = true;

const CodeSnippet = (props: any) => (
  <Code data-ui="code-snippet" className="w-full" {...props} />
);

export { CodeSnippet };

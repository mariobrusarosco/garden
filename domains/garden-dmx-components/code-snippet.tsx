import { Code } from "bright";

Code.lineNumbers = true;

const CodeSnippet = (props: any) => (
  <Code className="code-snippet" {...props} />
);

export { CodeSnippet };

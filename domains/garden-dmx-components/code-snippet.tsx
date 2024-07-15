// "use client";
import { Code } from "bright";

Code.lineNumbers = true;

const CodeSnippet = (props: any) => {
  console.log({ props });
  return (
    <div className="">
      <Code data-ui="code-snippet" className="w-full text-wrap" {...props} />
    </div>
  );
};

export { CodeSnippet };

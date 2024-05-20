import { MDXParser } from "@/domains/garden-components/mdx-parser";

export default function Home() {
  return (
    <div className="container pt-20">
      <div>
        <h1 className="text-4xl pb-20 font-serif">
          Whereas disregard and contempt for human rights have resulted
        </h1>
        <p className="font-sans">
          React Query is often described as the missing data-fetching library
          for React, but in more technical terms, it makes fetching, caching,
          synchronizing and updating server state in your React applications a
          breeze.
        </p>
      </div>
      <div>
        <h5 className="text-2xl">Related Topics</h5>
        <ul className="flex flex gap-3">
          <li>React</li>
          <li>Next</li>
          <li>State Manager</li>
          <li>Server State</li>
          <li>React query</li>
        </ul>
      </div>
    </div>
  );
}

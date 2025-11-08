"use client";

import { ChangeEvent } from "react";

interface Props {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  term: string;
}

export const ListSearcher = ({ onInputChange, term }: Props) => {
  return (
    <div data-ui="list-searcher" className="text-midnight-blue h-fit">
      <p className="text-sm font-sans">Search</p>
      <input
        className="border border-midnight-blue rounded-lg p-2 w-full max-w-[350px]"
        type="text"
        value={term}
        onChange={onInputChange}
      />
    </div>
  );
};

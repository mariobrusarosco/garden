"use client";

import { ChangeEvent } from "react";

interface Props {
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    term: string;
}

export const ListSearch = ({ onInputChange, term }: Props) => { 
    return (
        <div data-ui="list-searcher" className="ml-auto border border-midnight-blue rounded-lg p-2 pl-10
        ">
            <input type="text" value={term} onChange={onInputChange} />
        </div>
    )

}
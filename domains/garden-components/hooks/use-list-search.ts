"use client";
import { useState, useEffect, type ChangeEvent } from "react";

export const useListSearcher = (list: any[], debounceMs: number = 300) => {
    const [term, setTerm] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(term);
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [term, debounceMs]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const filteredList = list.filter((item) => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { term, handleInputChange, filteredList };
};
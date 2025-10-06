'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { useFetchSearchSuggestions } from "@/lib/api";
import { LocationData } from "@/types/search-suggestions";

interface Props {
    query: string,
    selectSuggestion: (data: LocationData) => void
}

export default function SearchSuggestionsDropdown({ query, selectSuggestion } : Props) {
    const { suggestions, isLoading, error } = useFetchSearchSuggestions(query)

    const handleClick = (data: LocationData) => {
        selectSuggestion(data)
    }

    if (isLoading) return (
        <Container>
            <div 
                className="text-preset-7 py-2.5 px-2 rounded-xl flex flex-row justify-start items-center gap-2.5">
                <div className="relative w-4 h-[19px] animate-spin duration-1000">
                    <Image 
                        src="/images/icon-loading.svg"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        alt="Search Icon"
                    />
                </div>
                <span>Search in progress</span>
            </div>
        </Container>
    )
    
    return (
        <>
            { suggestions.results &&
                <Container>
                    { suggestions.results.map((data) => (
                        <Button 
                            key={data.id}
                            type="button"
                            className="text-preset-7 justify-start py-2.5 px-2 hover:bg-neutral-700 hover:border-neutral-600 border border-neutral-800 rounded-xl"
                            onClick={() => handleClick(data)}>
                            {data.name}, {data.country}
                        </Button>
                    ))}
                </Container>
            }
        </>
    )
}

function Container({ children } : {children: React.ReactNode}) {
    return (
        <div 
            className="absolute top-[134px] left-0 right-0 md:top-[70px] md:right-[130px] flex flex-col gap-1 p-2 rounded-[12px] bg-neutral-800 border-neutral-700 border z-[100]">
                {children}
        </div>
    )
}
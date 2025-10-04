"use client"

import Image from "next/image";
import { Input } from "./ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import SearchSuggestionsDropdown from "./SearchSuggestionsDropdown";
import { LocationData } from "@/types/search-suggestions";
import { getCoordinates } from "@/lib/api";
import { SearchParams } from "@/types/search-params";

interface Props {
    displayNoResults: () => void,
    hideNoResults: () => void,
}

export default function SearchBar({ displayNoResults, hideNoResults }: Props) {
    const [query, setQuery] = useState("")
    const [searchParams, setSearchParams] = useState<SearchParams|null>(null)
    const [showSuggestionsDropdown, setShowSuggestionsDropdown] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value.trim())
        setSearchParams(null)
        if(e.target.value.trim()) {
            setShowSuggestionsDropdown(true)
        } else {
            setShowSuggestionsDropdown(false)
        }
    }

    const selectSuggestion = (data: LocationData) => {
        setQuery(data.name)
        setSearchParams({
            name: data.name,
            latitude: data.latitude,
            longitude: data.longitude
        })
        setShowSuggestionsDropdown(false)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowSuggestionsDropdown(false)
        if(query && searchParams!== null) {
            hideNoResults()
            // proceed with fetching weather data
        } else if (query) {
            const coordinates = await getCoordinates(query)
            if(coordinates !== null) {
                setSearchParams({
                    name: coordinates.name,
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude
                })
                hideNoResults()
                // proceed with fetching weather data
            } else {
                displayNoResults()
            }
        }
    }

    return (
        <div className="mb-8 xl:mb-12">
            <form 
                onSubmit={handleSubmit}
                className="relative flex flex-col md:flex-row gap-3 md:gap-4 w-full xl:max-w-[656px] mx-auto">
                <div className="md:flex-1 flex justify-between items-center gap-4 bg-neutral-800 rounded-[12px] py-4 px-6 focus-within:outline-3 focus-within:outline-neutral-900 focus-within:shadow-neutral-0 focus-within:shadow-[0px_0px_0px_5px_var(--tw-shadow-color)]">
                    <div className="relative w-5 h-5">
                        <Image 
                            src="/images/icon-search.svg"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                            alt="Search Icon"
                        />
                    </div>
                    <Input 
                        type="search"
                        placeholder="Search for a place..."
                        id="txt_search"
                        name="place"
                        autoComplete="off"
                        onChange={handleChange}
                        value={query}
                        className="flex-1 placeholder:text-neutral-200 text-preset-5-medium p-0 max-h-[24px] rounded-none border-0 focus-visible:outline-0 focus-visible:ring-0"
                    />
                </div>
                <button 
                    type="submit"
                    className="bg-blue-500 text-neutral-0 rounded-[12px] p-4 md:px-6 md:max-w-[114px] text-preset-5-medium text-center active:outline-3 active:outline-neutral-900 active:shadow-blue-500 active:shadow-[0px_0px_0px_5px_var(--tw-shadow-color)]">
                    Search
                </button>
                {query && showSuggestionsDropdown &&
                    <SearchSuggestionsDropdown 
                        query={query} 
                        selectSuggestion={selectSuggestion}
                    />
                }
            </form>
        </div>
    )
}
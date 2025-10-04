'use client';

import { LocationData, SearchSuggestions } from "@/types/search-suggestions";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export function getSearchSuggestions(query: string) {
    const { data, isLoading, error} = useSWR(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`, fetcher)

    return {
        suggestions: data as SearchSuggestions,
        isLoading,
        error
    }
}

export async function getCoordinates(query: string): Promise<LocationData | null> {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`)
    if (!response.ok) throw new Error("Error with fetching coordinates.")
    const data: SearchSuggestions = await response.json()
    let locationMatch: LocationData|null = null
    if(data.results) {
        data.results.forEach((location) => {
            console.log(location.name.toLowerCase() === query.toLowerCase())
            if(location.name.toLowerCase() === query.toLowerCase()) {
                locationMatch = location
            }
        })
    }
    return locationMatch
}
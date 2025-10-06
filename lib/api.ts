'use client';

import { WeatherData } from "@/types/forecast";
import { LocationData, SearchSuggestions } from "@/types/search-suggestions";
import { PrecipType, TempType, WindSpeedType } from "@/types/units";
import useSWR from "swr";

const fetcher = async (url: string) => {
    const response = await fetch(url)
    if(!response.ok) {
        const error = new Error(`An error occurred while fetching the data: ${response.statusText}`)
        throw error
    }
    return response.json()
}

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

interface GetWeatherDataProps {
    latitude: number,
    longitude: number,
    temp_unit: TempType,
    wind_speed_unit: WindSpeedType,
    precip_unit: PrecipType
}

export function getWeatherData({latitude, longitude, temp_unit, wind_speed_unit, precip_unit}: GetWeatherDataProps) {
    const base_url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code`;

    const units_params = `${wind_speed_unit === "mph" ? '&wind_speed_unit=mph' : ''}${temp_unit === 'Fahrenheit' ? '&temperature_unit=fahrenheit' : ''}${precip_unit === 'Inches' ? '&precipitation_unit=inch' : ''}`;
    
    const api_url = base_url + units_params;

    const { data, isLoading, error } = useSWR(api_url, fetcher)

    return {
        weather_data: data as WeatherData,
        isLoading,
        error
    }
}
'use client';

import DailyForecastSection from "@/components/DailyForecastSection";
import HourlyForecastSection from "@/components/HourlyForecastSection";
import SearchBar from "@/components/SearchBar";
import TodaysWeatherSection from "@/components/TodaysWeatherSection";
import { SearchParams } from "@/types/search-params";
import { useState } from "react";

export default function Home() {
  const [noSearchResults, setNoSearchResults] = useState(false)
  const [searchParams, setSearchParams] = useState<SearchParams>({
    name: "Berlin",
    country: "Germany",
    latitude: 52.52437,
    longitude: 13.41053
  })

  const displayNoResults = () => setNoSearchResults(true)
  const hideNoResults = () => setNoSearchResults(false)
  const updateSearchParams = (new_search_params : SearchParams) => setSearchParams(new_search_params)

  return (
    <main>
      <div className="text-center md:max-w-[482px] xl:max-w-[731px] mx-auto mb-12 xl:mb-16">
        <h1 className="text-preset-2">How's the sky looking today?</h1>
      </div>
      <SearchBar 
        displayNoResults={displayNoResults}
        hideNoResults={hideNoResults}
        updateSearchParams={updateSearchParams}
      />
      {noSearchResults ? (
        <div className="mt-4 text-center text-preset-4">No search result found!</div> 
      ) : (
        <div className="flex flex-col gap-8 xl:flex-row w-full">
          <div className="mb-8 xl:mb-0 xl:flex-1">
            <TodaysWeatherSection searchParams={searchParams}/>
            <DailyForecastSection searchParams={searchParams}/>
          </div>
          <HourlyForecastSection searchParams={searchParams}/>
        </div>
      )}
    </main>
  );
}

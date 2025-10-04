'use client';

import DailyForecastSection from "@/components/DailyForecastSection";
import HourlyForecastSection from "@/components/HourlyForecastSection";
import SearchBar from "@/components/SearchBar";
import TodaysWeatherSection from "@/components/TodaysWeatherSection";
import { useState } from "react";

export default function Home() {
  const [noSearchResults, setnoSearchResults] = useState(false)

  const displayNoResults = () => setnoSearchResults(true)
  const hideNoResults = () => setnoSearchResults(false)

  return (
    <main>
      <div className="text-center md:max-w-[482px] xl:max-w-[731px] mx-auto mb-12 xl:mb-16">
        <h1 className="text-preset-2">How's the sky looking today?</h1>
      </div>
      <SearchBar 
        displayNoResults={displayNoResults}
        hideNoResults={hideNoResults}
      />
      {noSearchResults ? 
        <div className="mt-4 text-center text-preset-4">No search result found!</div> :
        <div className="flex flex-col gap-8 xl:flex-row w-full">
          <div className="mb-8 xl:mb-0 xl:flex-1">
            <TodaysWeatherSection />
            <DailyForecastSection />
          </div>
          <HourlyForecastSection />
        </div>
      }
    </main>
  );
}

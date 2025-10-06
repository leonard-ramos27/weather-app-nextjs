'use client';

import { transformDailyData } from "@/lib/utils"
import DailyWeatherCard from "./DailyWeatherCard"
import { SearchParams } from "@/types/search-params"
import { useUnitsStore } from "@/providers/units-store-provider"
import { getWeatherData } from "@/lib/api"

export default function DailyForecastSection({searchParams} : {searchParams: SearchParams}) {
    const {  temperature, windspeed, precipitation, } = useUnitsStore((state) => state)
    const { weather_data, isLoading, error } = getWeatherData({
        latitude: searchParams.latitude,
        longitude: searchParams.longitude,
        temp_unit: temperature,
        wind_speed_unit: windspeed,
        precip_unit: precipitation
    })
    return (
        <section>
            <h2 className="text-preset-5 mb-5">Daily Forecast</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))] md:grid-cols-7 gap-4">
                {weather_data !== undefined && !isLoading && (
                    transformDailyData(weather_data.daily).map((data) => (
                        <DailyWeatherCard data={data} key={data.time}/>
                    ))
                )}
                {isLoading && (
                    Array.from({length: 7}, (_, i) => (
                        <div key={i} className="bg-neutral-800 border-neutral-600 border rounded-[12px] py-4 px-2.5 flex flex-col justify-between items-center gap-[15px] h-[165px] animate-pulse"></div>
                    ))
                )}
            </div>
        </section>
    )
}
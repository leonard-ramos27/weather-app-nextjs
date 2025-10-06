'use client';

import { useState } from "react";
import DaysDropdown from "./DaysDropdown";
import { getDatesFromHourlyData, transformHourlyData } from "@/lib/utils";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ScrollArea } from "./ui/scroll-area";
import { SearchParams } from "@/types/search-params";
import { useUnitsStore } from "@/providers/units-store-provider";
import { getWeatherData } from "@/lib/api";

export default function HourlyForecastSection({searchParams} : {searchParams: SearchParams}) {
    const {  temperature, windspeed, precipitation, } =     useUnitsStore((state) => state)
    const { weather_data, isLoading, error } = getWeatherData({
        latitude: searchParams.latitude,
        longitude: searchParams.longitude,
        temp_unit: temperature,
        wind_speed_unit: windspeed,
        precip_unit: precipitation
    })
    const [selectedDate, setSelectedDate] = useState("")
    const update_selected_date = (new_date: string) => {
        setSelectedDate(new_date)
    }
    return (
        <section className="xl:w-[384px] bg-neutral-800 rounded-[20px] py-5 px-4 md:p-6 overflow-hidden">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-preset-5">Hourly forecast</h2>
                {weather_data !== undefined && (
                    <DaysDropdown 
                        update_hourly_forecast={update_selected_date}
                        days={getDatesFromHourlyData(weather_data.hourly)}
                    />
                )}
            </div>
            <ScrollArea className="h-[592px]">
                <div className="flex flex-col justify-between items-start gap-4">
                    {weather_data !== undefined && !isLoading && (
                        transformHourlyData(
                            weather_data.hourly,
                            `${selectedDate ? selectedDate : weather_data.hourly.time[0]}`
                        ).map((data) => (
                            <HourlyWeatherCard data={data} key={data.time}/>
                        ))
                    )}
                    {isLoading && (
                        Array.from({length: 8}, (_, i) => (
                            <div key={i} className="bg-neutral-700 border-neutral-600 border rounded-xl py-[9px] pl-3 pr-4 flex flex-row justify-between items-center gap-2 w-full h-[60px] animate-pulse"></div>
                        ))
                    )}
                </div>
            </ScrollArea>
        </section>
    )
}
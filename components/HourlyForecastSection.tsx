'use client';

import { useState } from "react";
import DaysDropdown from "./DaysDropdown";
import { getDatesFromHourlyData, transformHourlyData } from "@/lib/utils";
import hourly_forecast_raw from "@/data/hourly-forecast";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ScrollArea } from "./ui/scroll-area";

export default function HourlyForecastSection() {
    const [hourlyForecastData, setHourlyForecastData] = useState(
        transformHourlyData(
            hourly_forecast_raw.hourly, 
            getDatesFromHourlyData(hourly_forecast_raw.hourly)[0]
        )
    )

    const update_hourly_forecast = (new_date: string) => {
        const new_data = transformHourlyData(
            hourly_forecast_raw.hourly,
            new_date
        )
        setHourlyForecastData(new_data)
    }
    return (
        <section className="xl:w-[384px] bg-neutral-800 rounded-[20px] py-5 px-4 md:p-6 overflow-hidden">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-preset-5">Hourly forecast</h2>
                <DaysDropdown update_hourly_forecast={update_hourly_forecast}/>
            </div>
            <ScrollArea className="h-[592px]">
                <div className="flex flex-col justify-between items-start gap-4">
                    {hourlyForecastData.map((data) => (
                        <HourlyWeatherCard data={data} key={data.time}/>
                    ))}
                </div>
            </ScrollArea>
        </section>
    )
}
'use client';

import { useFetchWeatherData } from "@/lib/api";
import { useUnitsStore } from "@/providers/units-store-provider";
import { SearchParams } from "@/types/search-params";
import dayjs from "dayjs";
import WeatherIcon from "./WeatherIcon";
import { DotWave } from 'ldrs/react'
import 'ldrs/react/DotWave.css'
import { useEffect } from "react";

interface Props {
    searchParams: SearchParams
    displayErrorMessage: () => void,
}

export default function TodaysWeatherSection({searchParams, displayErrorMessage} : Props) {
    const {  temperature, windspeed, precipitation, } = useUnitsStore((state) => state)
    const { weather_data, isLoading, error } = useFetchWeatherData({
        latitude: searchParams.latitude,
        longitude: searchParams.longitude,
        temp_unit: temperature,
        wind_speed_unit: windspeed,
        precip_unit: precipitation
    })

    useEffect(() => {
        if(error !== undefined){
            displayErrorMessage()
        } 
    }, [error])

    return (
        <div className="todays-weather-section mb-8 xl:mb-12">
            <section className={`w-full h-[286px] rounded-[20px] py-[41px] px-[25.5px] md:px-[24px] mb-5 xl:mb-8 flex flex-col items-center gap-4 ${isLoading ? 'bg-[#262540] justify-center' : 'bg-[url(/images/bg-today-small.svg)] md:bg-[url(/images/bg-today-large.svg)] bg-origin-border bg-center bg-cover bg-no-repeat md:flex-row justify-start'}`}>
                {weather_data !== undefined && !isLoading && (  
                    <>
                        <div className="text-center md:text-left md:flex-1">
                            <h2 className="text-preset-4 mb-3">{searchParams.name}, {searchParams.country}</h2>
                            <h2 className="text-preset-6 opacity-80">
                                {dayjs(weather_data.current.time).format('ddd, MMM D, YYYY')}
                            </h2>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-5 xl:pr-[3px]">
                            <WeatherIcon code={weather_data.current.weather_code} size="x-large" />
                            <h2 className="text-preset-1">{weather_data.current.temperature_2m}&deg;</h2>
                        </div>
                    </> 
                )}
                {isLoading && (
                    <>
                        <span>
                            <DotWave
                                size="42"
                                speed="1"
                                color="var(--color-neutral-0)" 
                            />
                        </span>
                        <span className="text-preset-6 text-neutral-200">Loading</span>
                    </>
                )}
            </section>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(163.5px,1fr))] md:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Feels Like</p>
                    <p className="text-preset-3">
                        {weather_data !== undefined && !isLoading && (
                            <span>{weather_data.daily.temperature_2m_min[0]}&deg;</span>
                        )}
                        {isLoading && <span>&mdash;</span>}
                    </p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Humidity</p>
                    <p className="text-preset-3">
                        {weather_data !== undefined && !isLoading && (
                            <span>{weather_data.current.relative_humidity_2m}%</span>
                        )}
                        {isLoading && <span>&mdash;</span>}
                    </p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Wind</p>
                    <p className="text-preset-3">
                        {weather_data !== undefined && !isLoading && (
                            <span>{weather_data.current.wind_speed_10m} {weather_data.current_units.wind_speed_10m}</span>
                        )}
                        {isLoading && <span>&mdash;</span>}
                    </p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Precipitation</p>
                    <p className="text-preset-3">
                        {weather_data !== undefined && !isLoading && (
                            <span>{weather_data.current.precipitation} {weather_data.current_units.precipitation}</span>
                        )}
                        {isLoading && <span>&mdash;</span>}
                    </p>
                </div>
            </section>
        </div>
    )
}
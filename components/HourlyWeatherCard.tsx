import { HourlyForecast } from "@/types/forecast";
import WeatherIcon from "./WeatherIcon";
import dayjs from "dayjs";

export default function HourlyWeatherCard({ data }: { data: HourlyForecast}) {
    return (
        <div className="bg-neutral-700 border-neutral-600 border rounded-xl py-[9px] pl-3 pr-4 flex flex-row justify-between items-center gap-2 w-full">
            <WeatherIcon code={data.weatherCode} size="small"/>
            <span className="flex-1 text-preset-6">
                {dayjs(data.time).format("h A")}
            </span>
            <span className="text-preset-7">
                {data.temperature}&deg;
            </span>
        </div>
    )
}
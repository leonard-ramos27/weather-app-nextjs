import { DailyForecast } from "@/types/forecast";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeatherCard({ data }: { data: DailyForecast}) {
    const formatted_date = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(data.time));

    return (
        <div className="bg-neutral-800 border-neutral-600 border rounded-[12px] py-4 px-2.5 flex flex-col justify-between items-center gap-[15px]">
            <h3 className="text-preset-6">{formatted_date}</h3>
            <WeatherIcon code={data.weatherCode} />
            <div className="flex flex-row justify-between items-center w-full">
                <span className="text-preset-7">{data.temperatureMax}&deg;</span>
                <span className="text-preset-7">{data.temperatureMin}&deg;</span>
            </div>
        </div>
    )
}
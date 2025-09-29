import daily_forecast_raw from "@/data/daily-forecast"
import { transformDailyData } from "@/lib/utils"
import DailyWeatherCard from "./DailyWeatherCard"

const daily_forecast_data = transformDailyData(daily_forecast_raw.daily)

export default function DailyForecastSection() {
    return (
        <section>
            <h2 className="text-preset-5 mb-5">Daily Forecast</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(103.66px,1fr))] md:grid-cols-7 gap-4">
                {daily_forecast_data.map((data) => (
                    <DailyWeatherCard data={data} key={data.time}/>
                ))}
            </div>
        </section>
    )
}
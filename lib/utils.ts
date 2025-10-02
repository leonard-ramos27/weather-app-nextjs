import { DailyForecast, HourlyForecast } from "@/types/forecast"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformDailyData(daily: {
  time: string[],
  weather_code: number[],
  temperature_2m_max: number[],
  temperature_2m_min: number[]
}): DailyForecast[] {
  return daily.time.map((time, i) => ({
    time,
    weatherCode: daily.weather_code[i],
    temperatureMax: daily.temperature_2m_max[i],
    temperatureMin: daily.temperature_2m_min[i],
  }));
}

export function getDatesFromHourlyData(hourly : {
  time: string[],
  temperature_2m: number[],
  weather_code: number[]
}): string[] {
  const dates = hourly.time.map((t) => t.split("T")[0])
  return [...new Set(dates)]
}

export function transformHourlyData(hourly : {
  time: string[],
  temperature_2m: number[],
  weather_code: number[]
}, date: string
): HourlyForecast[] {
  const data: HourlyForecast[] = []
  hourly.time.map((timestamp, index) => {
    const [day, hour] = timestamp.split("T")
    if(day === date) {
      data.push({
        time: timestamp,
        weatherCode: hourly.weather_code[index],
        temperature: hourly.temperature_2m[index]
      })
    }
  })
  return data
}

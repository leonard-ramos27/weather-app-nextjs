import { DailyForecast } from "@/types/forecast"
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

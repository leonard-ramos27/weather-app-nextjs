import { DailyForecast, geoLocationData, HourlyForecast } from "@/types/forecast"
import { clsx, type ClassValue } from "clsx"
import { SearchParams } from "@/types/search-params"
import { twMerge } from "tailwind-merge"
import { getLocationFromCoordinates } from "./api"

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
    if(timestamp.split("T")[0] === date.split("T")[0]) {
      data.push({
        time: timestamp,
        weatherCode: hourly.weather_code[index],
        temperature: hourly.temperature_2m[index]
      })
    }
  })
  return data
}

export function getGeoLocation(): Promise<geoLocationData | null> {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }, () => {
        console.log("Geolocation declined.")
        resolve(null)
      });
    } else {
      console.log("Geolocation not supported")
      resolve(null)
    }
  })
}

import WeatherIconType from "@/types/weather-icons";
import Image from "next/image";

const weatherCodeToIcon: Record<number, WeatherIconType> = {
  // Clear
  0: "sunny",

  // Cloudy variations
  1: "partly-cloudy",
  2: "partly-cloudy",
  3: "overcast",

  // Fog
  45: "fog",
  48: "fog",

  // Drizzle
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  56: "drizzle",
  57: "drizzle",

  // Rain
  61: "rain",
  63: "rain",
  65: "rain",
  66: "rain",
  67: "rain",
  80: "rain",
  81: "rain",
  82: "rain",

  // Snow
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snow",
  85: "snow",
  86: "snow",

  // Storm
  95: "storm",
  96: "storm",
  99: "storm",
};

export default function WeatherIcon({ code }: { code: number}) {
    const src = `/images/icon-${weatherCodeToIcon[code] ?? 'sunny'}.webp`

    return (
        <div className="relative w-[60px] h-[60px]">
            <Image 
                src={src}
                fill
                style={{
                    objectFit: 'cover',
                }}
                alt="Weather Icon"
            />
        </div>
    )
}
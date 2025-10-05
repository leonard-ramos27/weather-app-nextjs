export type DailyForecast = {
  time: string;
  weatherCode: number;
  temperatureMax: number;
  temperatureMin: number;
};

export type HourlyForecast = {
  time: string,
  weatherCode: number,
  temperature: number
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
  precipitation: string;
  weather_code: string;
}

export interface CurrentData {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  weather_code: number;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  weather_code: string;
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
}

export interface DailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

export interface DailyData {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: CurrentData;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
  daily_units: DailyUnits;
  daily: DailyData;
}
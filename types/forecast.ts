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
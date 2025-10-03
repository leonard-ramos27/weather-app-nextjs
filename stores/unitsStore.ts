import { PrecipType, TempType, UnitsType, WindSpeedType } from "@/types/units";
import { createStore } from 'zustand/vanilla';

export type UnitsState = {
    units: UnitsType,
    temperature: TempType,
    windspeed: WindSpeedType,
    precipitation: PrecipType,
}

export type UnitsAction = {
    updateUnit: (unit: UnitsType) => void,
    updateTemperature: (unit: TempType) => void,
    updateWindSpeed: (unit: WindSpeedType) => void,
    updatePrecipitation: (unit: PrecipType) => void,
}

export type UnitsStore = UnitsState & UnitsAction

export const defaultInitState: UnitsState = {
    units: "Metric",
    temperature: "Celsius",
    windspeed: "km/h",
    precipitation: "Millimeters",
}

export const createUnitsStore = (
    initState: UnitsState = defaultInitState,
) => {
    return createStore<UnitsStore>()((set) => ({
        ...initState,
        updateUnit: (unit: UnitsType) => set({ units: unit }),
        updateTemperature: (unit: TempType) => set({ temperature: unit}),
        updateWindSpeed: (unit: WindSpeedType) => set({ windspeed: unit }),
        updatePrecipitation: (unit: PrecipType) => set({ precipitation: unit }),
    }))
}
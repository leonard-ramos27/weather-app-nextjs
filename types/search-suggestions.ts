
export interface LocationData {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    elevation: number,
    feature_code: string,
    country_code: string,
    timezone: string,
    population?: number,
    postcodes?: string[],
    admin1_id?: number,
    admin2_id?: number,
    admin3_id?: number,
    admin4_id?: number,
    country_id: number,
    country: string,
    admin1?: string,
    admin2?: string,
    admin3?: string,
    admin4?: string,
}

export interface SearchSuggestions {
    results: LocationData[],
    generationtime_ms: number,
}
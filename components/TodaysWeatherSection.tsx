import Image from "next/image";

export default function TodaysWeatherSection() {
    return (
        <div className="todays-weather-section mb-8 xl:mb-12">
            <section className="bg-[url(/images/bg-today-small.svg)] md:bg-[url(/images/bg-today-large.svg)] bg-origin-border bg-center bg-cover bg-no-repeat w-full h-[286px] rounded-[20px] py-[41px] px-[25.5px] md:px-[24px] mb-5 xl:mb-8 flex flex-col md:flex-row justify-start items-center gap-4">
                <div className="text-center md:text-left md:flex-1">
                    <h2 className="text-preset-4 mb-3">Berlin, Germany</h2>
                    <h2 className="text-preset-6 opacity-80">Tuesday, Aug 5, 2025</h2>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 xl:pr-[3px]">
                    <div className="relative w-[120px] h-[120px]">
                        <Image 
                            src="/images/icon-sunny.webp"
                            fill
                            style={{
                            objectFit: 'cover',
                            }}
                            sizes="120px"
                            alt="Sunny Icon"
                        />
                    </div>
                    <h2 className="text-preset-1">68&deg;</h2>
                </div>
            </section>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(163.5px,1fr))] md:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Feels Like</p>
                    <p className="text-preset-3">64&deg;</p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Humidity</p>
                    <p className="text-preset-3">46%</p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Wind</p>
                    <p className="text-preset-3">9 mph</p>
                </div>
                <div className="weather-info-card">
                    <p className="text-preset-6 label">Precipitation</p>
                    <p className="text-preset-3">0 in</p>
                </div>
            </section>
        </div>
    )
}
import SearchBar from "@/components/SearchBar";
import TodaysWeatherSection from "@/components/TodaysWeatherSection";

export default function Home() {
  return (
    <main>
      <div className="text-center md:max-w-[482px] xl:max-w-[731px] mx-auto mb-12 xl:mb-16">
        <h1 className="text-preset-2">How's the sky looking today?</h1>
      </div>
      <SearchBar />
      <div className="flex flex-col gap-8 xl:flex-row w-full">
        <div className="mb-8 xl:mb-0 xl:flex-1">
          <TodaysWeatherSection />
          <section></section>
        </div>
      </div>
    </main>
  );
}

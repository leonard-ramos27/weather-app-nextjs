import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main>
      <div className="text-center md:max-w-[482px] xl:max-w-[731px] mx-auto mb-12 xl:mb-16">
        <h1 className="text-preset-2">How's the sky looking today?</h1>
      </div>
      <SearchBar />
    </main>
  );
}

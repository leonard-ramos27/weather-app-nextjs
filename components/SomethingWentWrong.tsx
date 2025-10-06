import Image from "next/image";
import { Button } from "./ui/button";

export default function SomethingWentWrong() {
    const handleRetry = () => window.location.reload()

    return (
        <div className="flex flex-col justify-start items-center gap-6">
        <div className="relative w-[42px] h-[50px]">
          <Image 
            src="/images/icon-error.svg"
            fill
            style={{
                objectFit: 'contain',
            }}
            sizes="42px"
            alt="Something went wrong icon"
          />
        </div>
        <h1 className="text-preset-2">Something went wrong</h1>
        <p className="text-preset-5-medium max-w-[554px] text-center text-neutral-200">We couldn&apos;t connect to the server (API error). Please try again in a few moments.</p>
        <Button 
            className="bg-[#262540] px-4 py-5 rounded-[6px] flex flex-row justify-between items-center gap-2.5"
            onClick={handleRetry}>
          <div className="relative w-[16px] h-[16px]">
            <Image 
              src="/images/icon-retry.svg"
              fill
              style={{
                  objectFit: 'cover',
              }}
              sizes="16px"
              alt="Something went wrong icon"
            />
          </div>
          <span className="text-preset-7">Retry</span>
        </Button>
      </div>
    )
}
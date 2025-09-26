import Image from "next/image";
import UnitsDropdown from "./UnitsDropdown";

export default function Header() {
    return (
        <header className="w-full flex flex-row justify-between items-center mb-12 xl:mb-16">
            <div className="relative w-[137.9px] h-[28px] md:w-[196.86px] md:h-[40px]">
                <Image 
                    src="/images/logo.svg"
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    alt="Picture of the Weather Now logo"
                />
            </div>
            <UnitsDropdown />
        </header>
    )
}
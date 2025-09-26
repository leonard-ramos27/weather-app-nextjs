"use client"

import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";

export default function SearchBar() {
    const [query, setQuery] = useState("")

    return (
        <div>
            <form 
                action="#"
                className="relative flex flex-col md:flex-row gap-3 md:gap-4 w-full xl:max-w-[656px] mx-auto">
                <div className="md:flex-1 flex justify-between items-center gap-4 bg-neutral-800 rounded-[12px] py-4 px-6 focus-within:outline-3 focus-within:outline-neutral-900 focus-within:shadow-neutral-0 focus-within:shadow-[0px_0px_0px_5px_var(--tw-shadow-color)]">
                    <div className="relative w-5 h-5">
                        <Image 
                            src="/images/icon-search.svg"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                            alt="Search Icon"
                        />
                    </div>
                    <Input 
                        type="search"
                        placeholder="Search for a place..."
                        id="txt_search"
                        name="place"
                        autoComplete="off"
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 placeholder:text-neutral-200 text-preset-5-medium p-0 max-h-[24px] rounded-none border-0 focus-visible:outline-0 focus-visible:ring-0"
                    />
                </div>
                <button 
                    type="submit"
                    className="bg-blue-500 text-neutral-0 rounded-[12px] p-4 md:px-6 md:max-w-[114px] text-preset-5-medium text-center active:outline-3 active:outline-neutral-900 active:shadow-blue-500 active:shadow-[0px_0px_0px_5px_var(--tw-shadow-color)]">
                    Search
                </button>
                {query &&
                    <div 
                        className="absolute top-[134px] left-0 right-0 md:top-[70px] md:right-[130px] flex flex-col gap-1 p-2 rounded-[12px] bg-neutral-800 border-neutral-700 border">
                        <div 
                            className="text-preset-7 py-2.5 px-2 rounded-xl flex flex-row justify-start items-center gap-2.5">
                            <div className="relative w-4 h-[19px] animate-spin duration-1000">
                                <Image 
                                    src="/images/icon-loading.svg"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    alt="Search Icon"
                                />
                            </div>
                            <span>Search in progress</span>
                        </div>
                        <Button 
                            className="text-preset-7 justify-start py-2.5 px-2 hover:bg-neutral-700 hover:border-neutral-600 border border-neutral-800 rounded-xl">
                            City Name
                        </Button>
                        <Button
                            className="text-preset-7 justify-start py-2.5 px-2 hover:bg-neutral-700 hover:border-neutral-600 border border-neutral-800 rounded-xl">
                            City Name
                        </Button>
                    </div>
                }
            </form>
        </div>
    )
}
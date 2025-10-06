'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Button } from "./ui/button";
import { useState } from "react";
import dayjs from "dayjs";

interface Props { 
    update_hourly_forecast: (new_date: string) => void,
    days: string[]
}

export default function DaysDropdown({ update_hourly_forecast, days } : Props) {
    const [selectedDay, setSelectedDay] = useState(days[0])

    const switchDay = (day: string) => {
        setSelectedDay(day)
        update_hourly_forecast(day)
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button className="min-w-[120px] min-h-[37px] py-2 px-4 flex flex-row justify-between items-center gap-3 rounded-lg bg-neutral-600 hover:bg-neutral-600/70 focus:bg-neutral-600/70 focus-visible:ring-2 focus-visible:ring-neutral-0 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800">
                    <span className="text-[15px] font-dm-sans font-medium leading-normal tracking-wide">{dayjs(selectedDay).format('dddd')}</span>
                    <div className="relative w-3.5 h-[18px]">
                        <Image 
                            src="/images/icon-dropdown.svg"
                            fill
                            style={{
                                objectFit: 'contain',
                            }}
                            alt="A Dropdown Icon"
                        />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                className="border-neutral-600 p-2 rounded-[12px] flex flex-col justify-between items-start gap-1"
                align="end"
                sideOffset={10}
            >
                {days.map((day) => (
                        <DropdownMenuItem key={day}
                            className={`text-preset-7 px-2 pt-[9px] pb-[11px] min-w-[198px] rounded-[8px] ${selectedDay === day ? 'bg-neutral-700' : ''}`}
                            onSelect={() => switchDay(day)}>
                            {dayjs(day).format('dddd')}
                        </DropdownMenuItem>
                ))}
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
    DropdownMenuCheckboxItem, 
    DropdownMenuGroup, 
    DropdownMenuItemIndicator 
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image"
import { Button } from "./ui/button";
import { useState } from "react";

export enum UnitsType {
    Imperial = "Imperial",
    Metric = "Metric"
}

export enum TempType {
    Celsius = "Celsius",
    Fahrenheit = "Fahrenheit"
}

export enum WindSpeedType {
    KmH = "km/h",
    MpH = "mph"
}

export enum PrecipType {
    Millimeters = "Millimeters",
    Inches = "Inches"
}

export default function UnitsDropdown() {
    const [unit, setUnit] = useState<UnitsType>(UnitsType.Metric)
    const [tempUnit, setTempUnit] = useState<TempType>(TempType.Celsius)
    const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedType>(WindSpeedType.KmH)
    const [precipUnit, setPrecipUnit] = useState<PrecipType>(PrecipType.Millimeters)

    const switchUnit = (e: Event) => {
        if(unit === UnitsType.Imperial){
            console.log("Setting all units to Metric")
            setUnit(UnitsType.Metric)
            setTempUnit(TempType.Celsius)
            setWindSpeedUnit(WindSpeedType.KmH)
            setPrecipUnit(PrecipType.Millimeters)
        } else if (unit === UnitsType.Metric) {
            console.log("Setting all units to Imperial")
            setUnit(UnitsType.Imperial)
            setTempUnit(TempType.Fahrenheit)
            setWindSpeedUnit(WindSpeedType.MpH)
            setPrecipUnit(PrecipType.Inches)
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button className="dropdown-menu-trigger">
                    <div className="relative w-3.5 h-3.5 md:w-4 md:h-4">
                        <Image 
                            src="/images/icon-units.svg"
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                            alt="A Settings/Gear Icon"
                        />
                    </div>
                    <span className="text-preset-7">Units</span>
                    <div className="relative w-[9px] h-3.5 md:w-3 md:h-[18px]">
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
                className="border-neutral-600 px-[7px] py-1.5 rounded-[12px]"
                align="end"
                sideOffset={10}
            >
                <DropdownMenuItem 
                    className="text-preset-7 px-2 pt-[9px] pb-[11px] min-w-[198px] rounded-[6px]"
                    onSelect={switchUnit}>
                    Switch to {unit === UnitsType.Imperial ? 'Metric' : unit === UnitsType.Metric ? 'Imperial' : ''}
                </DropdownMenuItem>
                <DropdownMenuGroup className="my-1">
                    <DropdownMenuLabel className="text-preset-8 text-neutral-300 pb-0 pt-[3px] mb-[7px]">
                        Temperature
                    </DropdownMenuLabel>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7 mb-1"
                        checked={tempUnit === TempType.Celsius}
                        onSelect={(e) => setTempUnit(TempType.Celsius)}
                    >
                        <span>Celsius (&deg;C)</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7"
                        checked={tempUnit === TempType.Fahrenheit}
                        onSelect={(e) => setTempUnit(TempType.Fahrenheit)}
                    >
                        <span>Fahrenheit (&deg;F)</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="mx-0 bg-neutral-600 my-0"/>
                <DropdownMenuGroup className="my-1">
                    <DropdownMenuLabel className="text-preset-8 text-neutral-300 pb-0 pt-[4px] mb-[7px]">
                        Wind Speed
                    </DropdownMenuLabel>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7 mb-[3px]"
                        checked={windSpeedUnit === WindSpeedType.KmH}
                        onSelect={(e) => setWindSpeedUnit(WindSpeedType.KmH)}
                    >
                        <span>km/h</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7"
                        checked={windSpeedUnit === WindSpeedType.MpH}
                        onSelect={(e) => setWindSpeedUnit(WindSpeedType.MpH)}
                    >
                        <span>mph</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="mx-0 bg-neutral-600 my-0"/>
                <DropdownMenuGroup className="my-1">
                    <DropdownMenuLabel className="text-preset-8 text-neutral-300 pb-0 pt-[5px] mb-[6px]">
                        Precipitation
                    </DropdownMenuLabel>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7 mb-1"
                        checked={precipUnit === PrecipType.Millimeters}
                        onSelect={(e) => setPrecipUnit(PrecipType.Millimeters)}
                    >
                        <span>Millimeters (mm)</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7"
                        checked={precipUnit === PrecipType.Inches}
                        onSelect={(e) => setPrecipUnit(PrecipType.Inches)}
                    >
                        <span>Inches (in)</span>
                        <DropdownMenuItemIndicator className="dropdown-menu-item-indicator">
                            <Image 
                                src="/images/icon-checkmark.svg"
                                fill
                                style={{
                                    objectFit: 'contain',
                                }}
                                alt="A Dropdown Icon"
                            />
                        </DropdownMenuItemIndicator>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
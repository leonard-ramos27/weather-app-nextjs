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
import { 
    PrecipType, 
    TempType, 
    UnitsType, 
    WindSpeedType 
} from "@/types/units";
import Image from "next/image"
import { Button } from "./ui/button";
import { useState } from "react";

export default function UnitsDropdown() {
    const [unit, setUnit] = useState<UnitsType>("Metric")
    const [tempUnit, setTempUnit] = useState<TempType>("Celsius")
    const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedType>("km/h")
    const [precipUnit, setPrecipUnit] = useState<PrecipType>("Millimeters")

    const switchUnit = (e: Event) => {
        e.preventDefault()
        if(unit === "Imperial"){
            setUnit("Metric")
            setTempUnit("Celsius")
            setWindSpeedUnit("km/h")
            setPrecipUnit("Millimeters")
        } else if (unit === "Metric") {
            setUnit("Imperial")
            setTempUnit("Fahrenheit")
            setWindSpeedUnit("mph")
            setPrecipUnit("Inches")
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
                    Switch to {unit === "Imperial" ? 'Metric' : unit === "Metric" ? 'Imperial' : ''}
                </DropdownMenuItem>
                <DropdownMenuGroup className="my-1">
                    <DropdownMenuLabel className="text-preset-8 text-neutral-300 pb-0 pt-[3px] mb-[7px]">
                        Temperature
                    </DropdownMenuLabel>
                    <DropdownMenuCheckboxItem 
                        className="dropdown-menu-checkbox text-preset-7 mb-1"
                        checked={tempUnit === "Celsius"}
                        onSelect={(e) => {
                            e.preventDefault()
                            setTempUnit("Celsius")
                        }}
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
                        checked={tempUnit === "Fahrenheit"}
                        onSelect={(e) => {
                            e.preventDefault()
                            setTempUnit("Fahrenheit")
                        }}
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
                        checked={windSpeedUnit === "km/h"}
                        onSelect={(e) => {
                            e.preventDefault()
                            setWindSpeedUnit("km/h")
                        }}
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
                        checked={windSpeedUnit === "mph"}
                        onSelect={(e) => {
                            e.preventDefault()
                            setWindSpeedUnit("mph")
                        }}
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
                        checked={precipUnit === "Millimeters"}
                        onSelect={(e) => {
                            e.preventDefault()
                            setPrecipUnit("Millimeters")
                        }}
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
                        checked={precipUnit === "Inches"}
                        onSelect={(e) => {
                            setPrecipUnit("Inches")
                        }}
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
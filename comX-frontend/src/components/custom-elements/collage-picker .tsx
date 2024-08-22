"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const collages = [
  { "value": "andhra-pradesh", "label": "Andhra Pradesh" },
  { "value": "arunachal-pradesh", "label": "Arunachal Pradesh" },
  { "value": "assam", "label": "Assam" },
  { "value": "bihar", "label": "Bihar" },
  { "value": "chhattisgarh", "label": "Chhattisgarh" },
  { "value": "goa", "label": "Goa" },
  { "value": "gujarat", "label": "Gujarat" },
  { "value": "haryana", "label": "Haryana" },
  { "value": "himachal-pradesh", "label": "Himachal Pradesh" },
  { "value": "jharkhand", "label": "Jharkhand" },
  { "value": "karnataka", "label": "Karnataka" },
  { "value": "kerala", "label": "Kerala" },
  { "value": "madhya-pradesh", "label": "Madhya Pradesh" },
  { "value": "maharashtra", "label": "Maharashtra" },
  { "value": "manipur", "label": "Manipur" },
  { "value": "meghalaya", "label": "Meghalaya" },
  { "value": "mizoram", "label": "Mizoram" },
  { "value": "nagaland", "label": "Nagaland" },
  { "value": "odisha", "label": "Odisha" },
  { "value": "punjab", "label": "Punjab" },
  { "value": "rajasthan", "label": "Rajasthan" },
  { "value": "sikkim", "label": "Sikkim" },
  { "value": "tamil-nadu", "label": "Tamil Nadu" },
  { "value": "telangana", "label": "Telangana" },
  { "value": "tripura", "label": "Tripura" },
  { "value": "uttar-pradesh", "label": "Uttar Pradesh" },
  { "value": "uttarakhand", "label": "Uttarakhand" },
  { "value": "west-bengal", "label": "West Bengal" },
  { "value": "andaman-and-nicobar-islands", "label": "Andaman and Nicobar Islands" },
  { "value": "chandigarh", "label": "Chandigarh" },
  { "value": "dadra-and-nagar-haveli-and-daman-and-diu", "label": "Dadra and Nagar Haveli and Daman and Diu" },
  { "value": "delhi", "label": "Delhi" },
  { "value": "lakshadweep", "label": "Lakshadweep" },
  { "value": "puducherry", "label": "Puducherry" },
  { "value": "ladakh", "label": "Ladakh" },
  { "value": "jammu-and-kashmir", "label": "Jammu and Kashmir" }
]

export function CollagePicker() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-white"
        >
          {value
            ? collages.find((collage) => collage.value === value)?.label
            : "Select collage..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 max-h-[200px] overflow-y-hidden relative">
        <Command>
          <CommandInput placeholder="Search collage..." className="h-9" />
          <CommandList>
            <CommandEmpty>No collage found.</CommandEmpty>
            <CommandGroup>
              {collages.map((collage) => (
                <CommandItem
                  key={collage.value}
                  value={collage.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {collage.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === collage.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

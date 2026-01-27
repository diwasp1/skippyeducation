// components/PhoneInput.tsx
import React, { useState, useMemo, useEffect } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

// Define the interface to match what Shadcn/React Hook Form passes
interface PhoneInputProps {
  value?: string;
  onChange: (value: string) => void;
}

export const PhoneInput = ({ value = "", onChange }: PhoneInputProps) => {
  const [open, setOpen] = useState(false);

  const countries = useMemo(() => {
    const allCountries = CountryList?.getAll() || [];

    const uniqueMap = new Map();

    allCountries.forEach((country) => {
      const uniqueKey = `${country.code}-${country.dial_code}`;
      if (!uniqueMap.has(uniqueKey)) {
        uniqueMap.set(uniqueKey, country);
      }
    });

    return Array.from(uniqueMap.values());
  }, []);
  const initialCountry = useMemo(
    () => CountryList?.findOneByCountryCode("AU") || countries[0],
    [countries],
  );

  const [dialCode, setDialCode] = useState(initialCountry?.dial_code || "+61");

  useEffect(() => {
    if (value && value.startsWith("+")) {
      const found = countries.find((c) => value.startsWith(c.dial_code));
      if (found) setDialCode(found.dial_code);
    }
  }, [value, countries]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberPart = e.target.value.replace(/\D/g, "");
    onChange(`${dialCode}${numberPart}`);
  };

  const currentNumberPart = value.startsWith(dialCode)
    ? value.slice(dialCode.length)
    : value.replace(/^\+ \d+/, "");

  return (
    <div className="flex gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[110px] justify-between px-2 h-10">
            <span className="flex items-center gap-1">
              {countries.find((c) => c.dial_code === dialCode)?.flag}
              <span className="text-xs font-mono">{dialCode}</span>
            </span>
            <ChevronsUpDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={`${country.code}-${country.dial_code}`} // Combined unique key
                    value={`${country.name} ${country.dial_code}`}
                    onSelect={() => {
                      setDialCode(country.dial_code);
                      onChange(`${country.dial_code}${currentNumberPart}`);
                      setOpen(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        dialCode === country.dial_code
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    <span className="mr-2">{country.flag}</span>
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      {country.name}
                    </span>
                    <span className="text-muted-foreground text-xs ml-2">
                      {country.dial_code}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Input
        type="tel"
        placeholder="Phone number here"
        className="flex-1"
        value={currentNumberPart}
        onChange={handleNumberChange}
      />
    </div>
  );
};

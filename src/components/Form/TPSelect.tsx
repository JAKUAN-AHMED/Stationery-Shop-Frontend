/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx } from "clsx";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Select } from "@radix-ui/react-select";
import { Controller } from "react-hook-form";

interface TPSelectProps {
  name: string;
  options: { label: string; value: string }[]; 
  control: any; 
  placeholder?: string; 
  className?: string; 
}

const TPSelect = ({
  name,
  options,
  control,
  placeholder,
  className,
}: TPSelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger
            className={clsx(
              "px-4 py-3 bg-primary-bg rounded-lg mt-2 border-none", // Tailwind styles
              className // Additional custom className
            )}
          >
            <SelectValue placeholder={placeholder || "Select an option"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-primary-bg">
              <SelectLabel>{placeholder || "Options"}</SelectLabel>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default TPSelect;

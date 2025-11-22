import { useController } from "react-hook-form";

import type { InputHTMLAttributes } from "react";

import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "../ui/field";

interface Option {
  id: number;
  label: string;
  value: string;
}

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  options: Option[];
  defaultValue?: string;
}

export default function Select({ label, name, options }: Props) {
  const { field, fieldState } = useController({ name });

  return (
    <Field orientation="responsive" data-invalid={fieldState.invalid}>
      {label ? <FieldLabel htmlFor={name}>{label}</FieldLabel> : null}

      <ShadcnSelect {...field} onValueChange={field.onChange}>
        <SelectTrigger
          id={name}
          aria-invalid={fieldState.invalid}
          className="w-full"
        >
          <SelectValue placeholder="Categories" />
        </SelectTrigger>

        <SelectContent position="item-aligned">
          {options.map((option) => (
            <SelectItem key={option.id} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}

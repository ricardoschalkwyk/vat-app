import * as React from "react";
import { useController } from "react-hook-form";

import { Input as ShadcnInput } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "../ui/field";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
  name: string;
  className?: string;
  disabled?: boolean;
}

function Input({
  type = "text",
  label,
  name,
  className,
  disabled = false,
  ...props
}: Props) {
  const {
    field,
    fieldState,
    formState: { isSubmitting },
  } = useController({ name });

  return (
    <Field data-invalid={fieldState.invalid}>
      {label ? <FieldLabel htmlFor={name}>{label}</FieldLabel> : null}

      <ShadcnInput
        id={name}
        type={type}
        className={className}
        {...field}
        disabled={field.disabled || isSubmitting || disabled}
        {...props}
      />

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}

export { Input };

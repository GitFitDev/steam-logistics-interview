import React, { Component, ReactNode } from "react";
import { useFormContext, RegisterOptions, FieldError } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { type MantineSize, TextInput } from "@mantine/core";

export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  validation?: RegisterOptions;
  size?: MantineSize;
  error?: string | FieldError | ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  helperText,
  id,
  type = "text",
  readOnly = false,
  validation,
  size,
  error,
  ...rest
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInput
      {...register(id, validation)}
      {...rest}
      label={label}
      placeholder={placeholder}
      error={errors[id]?.message?.toString()}
    />
  );
};

export { Input };
export default Input;

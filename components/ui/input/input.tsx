import React from "react";

import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFormContext } from "react-hook-form";

interface ControlledInputProps {
  name: "email" | "password";
  inputType?: "text" | "email" | "password";
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  label,
  placeholder,
  inputType = "text",
}) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex w-full flex-col gap-y-1">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}
            </label>
            <input
              placeholder={placeholder}
              {...field}
              onFocus={(e) => e.target.select()}
              id={name}
              type={inputType}
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={field.value || ""}
              autoComplete={name}
              onChange={(e) => {
                setValue(name, e.target.value.trim());
              }}
            />
          </div>
        )}
      />
      <ErrorMessage
        render={(errors) => (
          <p className="whitespace-pre-wrap font-semibold text-xs text-red-500">
            {errors.message}
          </p>
        )}
        name={name}
        errors={errors}
      />
    </div>
  );
};

export default ControlledInput;

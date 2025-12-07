import { TextField } from "@mui/material";
import {
  get,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

type TextInputRegisterWithPropsProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  errors: FieldErrors<T>;
  required?: boolean;
  register: UseFormRegister<T>;
};

export function TextInputRegisterWithProps<T extends FieldValues>({
  id,
  label,
  errors,
  required = false,
  register,
}: TextInputRegisterWithPropsProps<T>) {
  const error = get(errors, id);
  return (
    <TextField
      label={label}
      variant="outlined"
      error={!!error}
      helperText={error?.message}
      {...register(id, { required })}
    />
  );
}

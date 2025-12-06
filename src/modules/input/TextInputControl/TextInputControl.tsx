import { TextField } from "@mui/material";

type TextInputControlProps = { id: string; label: string };

export function TextInputControl({ id, label }: TextInputControlProps) {
  return <TextField id={id} label={label} variant="outlined" />;
}

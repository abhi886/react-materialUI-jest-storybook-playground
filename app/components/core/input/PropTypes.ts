import { TextFieldProps } from "@mui/material";

export type InputProps = {
  id: string;
  label:string;
  variant: "outlined" | "filled" | "standard";
  fullWidth: boolean;
  value: string;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  slotProps?: TextFieldProps['slotProps'];
  type: 'text' | 'email' | 'password'| 'date';
}
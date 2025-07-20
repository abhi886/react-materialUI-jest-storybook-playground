import { TextFieldProps } from '@mui/material';

export type InputProps = {
  name?: string;
  id: string;
  label: string;
  variant: 'outlined' | 'filled' | 'standard';
  fullWidth: boolean;
  value: string;
  // callback fired when text field value changes.
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // Placeholder is displayed when the input is empty
  placeholder?: string;
  slotProps?: TextFieldProps['slotProps'];
  type: 'text' | 'email' | 'password' | 'date';
  helperText?: string;
  error?: boolean;
};

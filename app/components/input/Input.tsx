// components/CategoryComboBox.jsx
import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
// import theme from '../../theme'; 
import { TextFieldProps } from "@mui/material";

// Styled MUI TextField
const StyledInput = styled(TextField)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

export type InputProps = {
  id: string;
  label:string;
  variant: "outlined" | "filled" | "standard";
  fullWidth: boolean;
  value: string;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  slotProps?: TextFieldProps['slotProps'];
}
// Reusable Input component
const Input: FC<InputProps> = ({
  id,
  label,
  variant,
  fullWidth,
  value,
  onChange,
  placeholder,
  slotProps,
}) => {
  return (
    <StyledInput
      id={id}
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={slotProps}
    />
  );
};

export default Input;

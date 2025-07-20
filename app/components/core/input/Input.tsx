// components/CategoryComboBox.jsx
import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './PropTypes';
import styled from 'styled-components';

const StyledInput = styled(TextField)`
  &.mui-cmpglg-MuiFormControl-root-MuiTextField-root {
    backgrond-color: #dae9f4;
  }
  .mui-17nr5yn-MuiInputBase-root-MuiOutlinedInput-root {
    border: 1px solid #27ae8a;
    border-radius: 7px;
  }
  .mui-17nr5yn-MuiInputBase-root-MuiOutlinedInput-root {
    background-color: #fff;
  }
`;

// Reusable Input component
const Input: FC<InputProps> = ({
  id,
  name,
  label,
  variant,
  fullWidth,
  value,
  onChange,
  placeholder,
  slotProps,
  type,
  helperText,
  error,
}) => {
  return (
    <StyledInput
      name={name}
      id={id}
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={slotProps}
      type={type}
      error={error}
      helperText={helperText}
    />
  );
};

export default Input;

// components/CategoryComboBox.jsx
import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { InputProps } from './PropTypes';
import styled from 'styled-components';


const StyledInput = styled(TextField)`
  background-color: #f9f9f9;
  border-radius: 4px;
`;

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
  type
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
      type={type}
    />
  );
};

export default Input;

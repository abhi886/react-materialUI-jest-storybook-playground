import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

  const InputBox = styled(Box)`
    padding: 20px;
    background-color: #743bfc;
    margin-bottom:10px;
    border-radius: 10px;
    `;


const InputContainer = ({children}: any) => {
  
  return (
    <InputBox>{children}</InputBox>
  )
}

export default InputContainer
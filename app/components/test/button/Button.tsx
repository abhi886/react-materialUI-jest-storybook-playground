import React from 'react';
import { Button, IconButton } from '@mui/material';
import { styled } from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

const TestButton = () => {
    const handleClick = () => {
        alert('click me');
    }
const Button1 = styled(Button)`
background-color: #f9f9f9;
:hover background-color: #681212;
`
  return (
    <div>
      <Button1 onClick={handleClick}>Button 1</Button1>
      <IconButton aria-label="delete">
      <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default TestButton;
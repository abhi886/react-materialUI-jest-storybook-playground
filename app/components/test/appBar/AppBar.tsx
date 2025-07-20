import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const LoginButton = styled(Button)`
  margin-left: auto;
`;
const TestAppBar = () => {
  return (
    <div>
      <AppBar variant="elevation">
        <Toolbar>
          <Typography>Logo</Typography>
          <LoginButton variant="contained" color="error">
            Login
          </LoginButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TestAppBar;

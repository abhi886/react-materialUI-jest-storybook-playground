import React from 'react';
import { Typography, Box } from '@mui/material';

export const TestTypography = () => {
  return (
    <div>
      <Typography variant="h1" sx={{ color: 'red' }}>
        Test typography H1
      </Typography>
      <Typography variant="h2" sx={{ color: 'blue' }}>
        Test typography H2
      </Typography>
      <Box>Test Box B1</Box>
    </div>
  );
};

import React from 'react';

import PrivateRoute from './routes/PrivateRoute';
import theme from '../src/contexts/theme.js';
import { ThemeProvider } from '@mui/material';
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PrivateRoute />
      </ThemeProvider>
    </>
  );
};

export default App;

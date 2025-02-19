import React from 'react';

import PrivateRoute from './routes/PrivateRoute.jsx';
import theme from './contexts/theme.js';
import { ThemeProvider } from '@mui/material';
const App = () => {
  return (
    <div className=''>
      <ThemeProvider theme={theme}>
        <PrivateRoute />
      </ThemeProvider>
    </div>
  );
};

export default App;

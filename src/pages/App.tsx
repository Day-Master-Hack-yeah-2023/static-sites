import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../provider/ThemeProvider';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GLobalStyle />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from './styles/globalStyles';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <GLobalStyle />
      <HomePage />
    </StyledEngineProvider>
  );
}

export default App;

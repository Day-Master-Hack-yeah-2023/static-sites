import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from './globalStyles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <GLobalStyle />
    </StyledEngineProvider>
  );
}

export default App;

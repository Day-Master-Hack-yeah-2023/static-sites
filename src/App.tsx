import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from './globalStyles';
import { Layout } from './components/Layout';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <GLobalStyle />

      <Layout></Layout>
    </StyledEngineProvider>
  );
}

export default App;

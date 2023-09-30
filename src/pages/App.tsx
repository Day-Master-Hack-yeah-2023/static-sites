import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../provider/ThemeProvider';
import { Layout } from '../components/Layout';
import { Dashboard } from '../components/PageContent/Dashboard';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GLobalStyle />

        <Layout>
          <Dashboard />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../provider/ThemeProvider';
import { Layout } from '../components/Layout';
import { DashboardProvider } from '../components/PageContent/Dashboard/Dashboard.context';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GLobalStyle />

        <DashboardProvider>
          <Layout></Layout>
        </DashboardProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

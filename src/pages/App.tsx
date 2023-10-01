import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import GLobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../provider/ThemeProvider';
import { Layout } from '../components/Layout';
import { Dashboard } from '../components/PageContent/Dashboard';
import { DashboardProvider } from '../components/PageContent/Dashboard/Dashboard.context';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <GLobalStyle />

        <DashboardProvider>
          <Layout>
            <Dashboard />
          </Layout>
        </DashboardProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

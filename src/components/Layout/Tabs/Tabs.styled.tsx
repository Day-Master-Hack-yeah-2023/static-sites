import { TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import styled from 'styled-components';
import { defaultTheme } from '../../../provider/ThemeProvider';

const TabsList = styled(TabList)`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  width: 100%;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    position: sticky;
    width: max-content;
  }
`;
const TabsItem = styled(Tab)`
  width: 33.3%;
`;

const TabsContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => (theme as typeof defaultTheme).background};
  width: 100vw;
  min-height: calc(100vh - 96px);
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    min-height: calc(100vh - 48px);
  }
`;

const TabsPanel = styled(TabPanel)``;

const TabsHeaderStyled = styled.article`
  display: flex;
  align-content: start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  min-height: calc(100vh - 48px);
  padding: 0 16px;
`;

const TabsHeadingStyled = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 18px;
  font-weight: 600;
  min-width: max-content;
  padding: 8px;
`;

export {
  TabsItem,
  TabsList,
  TabsHeaderStyled,
  TabsHeadingStyled,
  TabsContentContainer,
  TabsPanel,
};

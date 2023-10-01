import React from 'react';
import { TabContext } from '@mui/lab';
import {
  TabsContentContainer,
  TabsHeaderStyled,
  TabsHeadingStyled,
  TabsItem,
  TabsList,
  TabsPanel,
} from './Tabs.styled';
import { pageContent, tabsData } from './Tabs.data';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Tabs: React.FC = () => {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabsHeaderStyled>
        <TabsHeadingStyled>
          Day <Brightness7Icon color="warning" /> master
        </TabsHeadingStyled>

        <TabsList onChange={handleChange} aria-label="tabs">
          {tabsData().map((current, index) => (
            <TabsItem
              key={current.name}
              label={current.name}
              value={`${index + 1}`}
            />
          ))}
        </TabsList>

        <TabsContentContainer>
          {pageContent().map((current, index) => (
            <TabsPanel key={index} value={`${index + 1}`}>
              {current}
            </TabsPanel>
          ))}
        </TabsContentContainer>
      </TabsHeaderStyled>
    </TabContext>
  );
};

export { Tabs };

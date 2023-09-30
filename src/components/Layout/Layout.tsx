import React from 'react';
import { LayoutChildrenContainer, LayoutStled } from './Layout.styled';
import { Tabs } from './Tabs';

type LayoutProps = React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStled>
      <Tabs></Tabs>

      <LayoutChildrenContainer>{children}</LayoutChildrenContainer>
    </LayoutStled>
  );
};

export { Layout };

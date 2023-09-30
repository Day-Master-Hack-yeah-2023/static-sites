import React from 'react';
import { LayoutChildrenContainer, LayoutStled } from './Layout.styled';
import { TopNavigation } from './TopNavigation';
import { Footer } from './Footer';

type LayoutProps = React.PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const footer = document.querySelector('#main-footer');
  const footerHeight = footer?.clientHeight ?? 100;

  return (
    <LayoutStled>
      <TopNavigation />

      <LayoutChildrenContainer footerHeight={footerHeight}>
        {children}
      </LayoutChildrenContainer>

      <Footer />
    </LayoutStled>
  );
};

export { Layout };

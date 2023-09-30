import React from 'react';
import {
  TopNavigationAnchorStyled,
  TopNavigationHamburgerMenu,
  TopNavigationHeading,
  TopNavigationItemStyled,
  TopNavigationListStyled,
  TopNavigationStyled,
} from './TopNavigation.styled';
import { navigationData } from './TopNavigation.data';
import MenuIcon from '@mui/icons-material/Menu';

const TopNavigation = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <TopNavigationStyled>
      <TopNavigationHeading>Day master</TopNavigationHeading>

      <TopNavigationHamburgerMenu
        aria-label="toggle menu"
        onClick={() => handleClick()}
      >
        <MenuIcon />
      </TopNavigationHamburgerMenu>

      <TopNavigationListStyled isOpen={isOpenMenu}>
        {navigationData().map((item) => (
          <TopNavigationItemStyled key={item.name}>
            <TopNavigationAnchorStyled startIcon={item.icon} href={item.href}>
              {item.name}
            </TopNavigationAnchorStyled>
          </TopNavigationItemStyled>
        ))}
      </TopNavigationListStyled>
    </TopNavigationStyled>
  );
};

export { TopNavigation };

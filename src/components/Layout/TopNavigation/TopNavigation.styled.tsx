import { Button, IconButton } from '@mui/material';
import styled from 'styled-components';

const TopNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
`;

const TopNavigationHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const TopNavigationHamburgerMenu = styled(IconButton)`
  width: 3rem;
  height: 3rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const TopNavigationListStyled = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px 30px;
  list-style: none;
  width: 100vw;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: max-content;
  }
`;

const TopNavigationItemStyled = styled.li`
  width: 100%;
`;

const TopNavigationAnchorStyled = styled(Button)`
  width: 100%;
  max-width: 100%;
`;

export {
  TopNavigationStyled,
  TopNavigationHeading,
  TopNavigationListStyled,
  TopNavigationItemStyled,
  TopNavigationAnchorStyled,
  TopNavigationHamburgerMenu,
};

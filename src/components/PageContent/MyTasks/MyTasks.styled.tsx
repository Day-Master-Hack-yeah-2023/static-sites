import { Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { defaultTheme } from '../../../provider/ThemeProvider';

const MyTasksStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const MyTasksHeadingStyled = styled.h2`
  color: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
`;

const MyTasksButtonStyled = styled(Button)`
  background: ${({ theme }) => (theme as typeof defaultTheme).primaryItem};
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  padding: 6px 15px;
  border-radius: 24px;
  font-size: 16px;

  &:hover,
  &:focus {
    background: ${({ theme }) => (theme as typeof defaultTheme).item};
    color: ${({ theme }) => (theme as typeof defaultTheme).background};
  }
`;

const MyTasksTextFieldStyled = styled(TextField)`
  max-width: 250px;
  width: 100%;
`;

const MyTasksContainerTasksStyled = styled.section`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px
    ${({ theme }) => (theme as typeof defaultTheme).lightBorder};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  padding: 0 20px;
`;

const MyTasksFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const MyTasksTypographyStyled = styled(Typography)`
  max-width: 55%;
  text-align: start;
  overflow-wrap: break-word;
  text-transform: uppercase;

  @media (min-width: 425px) {
    /* max-width: 220px; */
  }
`;

const EmptyContentStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  width: 100%;
  max-width: 320px;
  padding: 30px 10px;
  box-shadow: 2px 2px 5px #bdbdbf;
  border-radius: 10px;
  opacity: 50%;
`;

const EmptyContentHeadingStyled = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
`;

const EmptyContentTextStyled = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

export {
  MyTasksStyled,
  MyTasksHeadingStyled,
  MyTasksButtonStyled,
  MyTasksTextFieldStyled,
  MyTasksContainerTasksStyled,
  MyTasksFormStyled,
  MyTasksTypographyStyled,
  EmptyContentHeadingStyled,
  EmptyContentStyled,
  EmptyContentTextStyled,
};

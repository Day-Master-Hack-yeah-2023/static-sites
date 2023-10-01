import styled from 'styled-components';
import { defaultTheme } from '../../../provider/ThemeProvider';
import {
  MyTasksContainerTasksStyled,
  MyTasksTypographyStyled,
} from '../MyTasks/MyTasks.styled';

const DashboardStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 20px;
  width: 100vw;
`;

const DashboardDataStyled = styled.header`
  width: 100%;
  padding: 20px 20px;
  color: ${({ theme }) => (theme as typeof defaultTheme).background};
  background-color: ${({ theme }) =>
    (theme as typeof defaultTheme).primaryItem};
  text-align: center;
  font-size: 20px;
`;

const DashboardWrapperStyled = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 0 20px;
  gap: 20px;
`;

const DashboardContainerStyled = styled(MyTasksContainerTasksStyled)<{
  isChecked: boolean;
}>`
  background-color: ${({ isChecked }) => (isChecked ? '#BDBDBF' : '#ffffff')};
  box-shadow: ${({ isChecked }) =>
    isChecked ? 'none' : '2px 2px 5px #BDBDBF'};
  opacity: ${({ isChecked }) => (isChecked ? '65%' : '100%')};
  pointer-events: ${({ isChecked }) => (isChecked ? 'none' : 'visible')};
`;

const DefaultDashboardSection = styled.section`
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

const DefaultDashboardHeading = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
`;

const DefaultDashboardText = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

const DashboardTypographyStyled = styled(MyTasksTypographyStyled)``;

export {
  DashboardStyled,
  DashboardDataStyled,
  DashboardWrapperStyled,
  DashboardContainerStyled,
  DashboardTypographyStyled,
  DefaultDashboardHeading,
  DefaultDashboardSection,
  DefaultDashboardText,
};

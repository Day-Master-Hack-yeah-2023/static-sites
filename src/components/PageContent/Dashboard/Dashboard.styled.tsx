import styled from 'styled-components';
import { defaultTheme } from '../../../provider/ThemeProvider';

const DashboardStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
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

export { DashboardStyled, DashboardDataStyled };

import React from 'react';
import { DashboardDataStyled, DashboardStyled } from './Dashboard.styled';

const Dashboard = () => {
  const currentDate = new Date();

  const daysOfWeek = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
  ];

  const getDayOfWeek = (date: Date) => {
    return daysOfWeek[date.getDay()];
  };

  const getDateWithoutYear = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}`;
  };

  return (
    <DashboardStyled>
      <DashboardDataStyled>
        {getDayOfWeek(currentDate)} {getDateWithoutYear(currentDate)}
      </DashboardDataStyled>
    </DashboardStyled>
  );
};

export { Dashboard };

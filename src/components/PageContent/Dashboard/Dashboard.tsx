import React, { useState } from 'react';
import {
  DashboardContainerStyled,
  DashboardDataStyled,
  DashboardStyled,
  DashboardTypographyStyled,
  DashboardWrapperStyled,
} from './Dashboard.styled';
import { Checkbox } from '@mui/material';

const Dashboard = () => {
  // const tasksList = JSON.parse(localStorage.getItem('tasksList') ?? '[]');
  const [isChecked, setIsChecked] = useState<boolean>(false);
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <DashboardStyled>
      <DashboardDataStyled>
        {getDayOfWeek(currentDate)} {getDateWithoutYear(currentDate)}
      </DashboardDataStyled>

      <DashboardWrapperStyled>
        <DashboardContainerStyled isChecked={isChecked}>
          <DashboardTypographyStyled>Cos</DashboardTypographyStyled>

          <Checkbox
            color="success"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
            checked={isChecked}
            disabled={isChecked}
            onChange={handleCheckboxChange}
          />
        </DashboardContainerStyled>
      </DashboardWrapperStyled>
    </DashboardStyled>
  );
};

export { Dashboard };

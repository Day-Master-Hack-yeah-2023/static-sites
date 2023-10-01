import React, { useState, useEffect } from 'react';
import {
  DashboardContainerStyled,
  DashboardDataStyled,
  DashboardStyled,
  DashboardTypographyStyled,
  DashboardWrapperStyled,
  DefaultDashboardHeading,
  DefaultDashboardSection,
  DefaultDashboardText,
} from './Dashboard.styled';
import { Checkbox } from '@mui/material';
import { DAYSOFWEEK } from './Dashboard.data';

const Dashboard = () => {
  const [tasksList, setTasksList] = useState<
    { value: string; isChecked: boolean }[]
  >([]);

  const currentDate = new Date();

  const getDayOfWeek = (date: Date) => {
    return DAYSOFWEEK[date.getDay()];
  };

  const getDateWithoutYear = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0
      ) {
        setTasksList([]);
      }
    }, 1000);

    const storedTasks = localStorage.getItem('tasksList');
    if (storedTasks) {
      setTasksList(JSON.parse(storedTasks));
    }

    return () => clearInterval(intervalId);
  }, []);

  const countPoints = () => {
    const date = new Date(currentDate.getTime() + 864000000);

    const currentDayOfWeek = date.getDay();

    const storedData = localStorage.getItem('checkDate');
    const checkDate: number[] = storedData ? JSON.parse(storedData) : [];

    const isDifferent = checkDate.some(
      (day: number) => day !== currentDayOfWeek
    );

    if (isDifferent) {
      const storedPoints = localStorage.getItem('points');

      const points: number = storedPoints ? JSON.parse(storedPoints) : 0;

      localStorage.setItem('points', JSON.stringify(points + 10));
      localStorage.setItem('checkDate', JSON.stringify([]));
    } else {
      checkDate.push(currentDayOfWeek);

      localStorage.setItem('checkDate', JSON.stringify(checkDate));
    }
  };

  // React.useEffect(() => {
  //   const countPoints = () => {
  //     const date = new Date(
  //       currentDate.getTime() + 86400000 + 86400000 + 86400000
  //     );
  //     const currentDayOfWeek = date.getDay();

  //     const storedData = localStorage.getItem('checkDate');
  //     const checkDate = storedData ? JSON.parse(storedData) : [];

  //     const isDifferent = checkDate.some(
  //       (day: number) => day !== currentDayOfWeek
  //     );

  //     if (isDifferent) {
  //       console.log('Różnica w tablicy. Tablica przed resetem:', checkDate);
  //       // Sprawdź, czy 'points' istnieje w localStorage
  //       const storedPoints = localStorage.getItem('points');

  //       // Jeśli 'points' nie istnieje lub jest null, ustaw wartość domyślną na 0
  //       const points: number = storedPoints ? JSON.parse(storedPoints) : 0;

  //       // Dodaj 10 do 'points'
  //       localStorage.setItem('points', JSON.stringify(points + 10));
  //     } else {
  //       checkDate.push(currentDayOfWeek);
  //       localStorage.setItem('checkDate', JSON.stringify(checkDate));
  //       console.log('dzisiaj', date);
  //       console.log('Moja testowa tablica:', checkDate);
  //       console.log('Długość tablicy:', checkDate.length);
  //     }
  //   };

  //   countPoints();
  // }, []);

  const handleCheckboxChange = (index: number): void => {
    const updatedTasksList = [...tasksList];
    updatedTasksList[index].isChecked = !updatedTasksList[index].isChecked;

    setTasksList(updatedTasksList);
    localStorage.setItem('tasksList', JSON.stringify(updatedTasksList));

    countPoints();
  };

  return (
    <DashboardStyled>
      <DashboardDataStyled>
        {getDayOfWeek(currentDate)} {getDateWithoutYear(currentDate)}
      </DashboardDataStyled>

      <DashboardWrapperStyled>
        {tasksList.map((task, index) => (
          <DashboardContainerStyled key={index} isChecked={task.isChecked}>
            <DashboardTypographyStyled>{task.value}</DashboardTypographyStyled>

            <Checkbox
              color="default"
              sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
              checked={task.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
          </DashboardContainerStyled>
        ))}

        {tasksList.length === 0 && (
          <DefaultDashboardSection>
            <DefaultDashboardHeading>
              You dont have any task yet.
            </DefaultDashboardHeading>

            <DefaultDashboardText>
              go to 'My Task' to add one
            </DefaultDashboardText>
          </DefaultDashboardSection>
        )}
      </DashboardWrapperStyled>
    </DashboardStyled>
  );
};

export { Dashboard };

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

  // const countPoints = () => {
  //   // Pobierz aktualną datę
  //   const date = new Date(
  //     currentDate.getTime() + 86400000 + 86400000 + 86400000
  //   );

  //   // Pobierz dzień tygodnia (0-niedziela, 1-poniedziałek, ..., 6-sobota)
  //   const currentDayOfWeek = date.getDay();

  //   // Sprawdź, czy istnieje wpis w local storage
  //   const storedData = localStorage.getItem('checkDate');
  //   const checkDate: number[] = storedData ? JSON.parse(storedData) : [];

  //   // Sprawdź, czy któryś dzień w tablicy jest różny od aktualnego
  //   const isDifferent = checkDate.some(
  //     (day: number) => day !== currentDayOfWeek
  //   );

  //   if (isDifferent) {
  //     console.log('Różnica w tablicy. Tablica przed resetem:', checkDate);
  //     // Zapisz pustą tablicę w local storage
  //     localStorage.setItem('checkDate', JSON.stringify([]));
  //   } else {
  //     // Dodaj aktualny dzień tygodnia
  //     checkDate.push(currentDayOfWeek);

  //     // Zapisz tablicę w local storage
  //     localStorage.setItem('checkDate', JSON.stringify(checkDate));

  //     console.log('dzisiaj', date);
  //     console.log('Moja testowa tablica:', checkDate);
  //     console.log('Długość tablicy:', checkDate.length);
  //   }
  // };

  // React.useEffect(() => {
  //   const countPoints = () => {
  //     const date = new Date(currentDate.getTime() + 86400000 + 86400000);
  //     const currentDayOfWeek = date.getDay();

  //     const storedData = localStorage.getItem('checkDate');
  //     const checkDate = storedData ? JSON.parse(storedData) : [];

  //     const isDifferent = checkDate.some(
  //       (day: number) => day !== currentDayOfWeek
  //     );

  //     if (isDifferent) {
  //       console.log('Różnica w tablicy. Tablica przed resetem:', checkDate);
  //       localStorage.setItem('checkDate', JSON.stringify([]));
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

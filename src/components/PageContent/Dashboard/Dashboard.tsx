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

  const handleCheckboxChange = (index: number) => {
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

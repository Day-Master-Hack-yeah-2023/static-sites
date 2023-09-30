import React, { useEffect, useState } from 'react';
import {
  MyTasksButtonStyled,
  MyTasksContainerTasksStyled,
  MyTasksFormStyled,
  MyTasksStyled,
  MyTasksTextFieldStyled,
  MyTasksTypographyStyled,
} from './MyTasks.styled';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const LOCAL_STORAGE_KEY = 'tasksList';

const MyTasks: React.FC = () => {
  const [tasksList, setTasksList] = useState<{ value: string }[]>([]);
  const [header, setHeader] = useState<string>('');

  useEffect(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasksList(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: { value: string }[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  };

  const addTask = () => {
    if (header.trim() !== '') {
      const newTask = {
        value: header,
      };
      const updatedTasksList = [...tasksList, newTask];
      setTasksList(updatedTasksList);
      saveTasksToLocalStorage(updatedTasksList);
      setHeader('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasksList = [...tasksList];
    updatedTasksList.splice(index, 1);
    setTasksList(updatedTasksList);
    saveTasksToLocalStorage(updatedTasksList);
  };

  const removeAllTasks = () => {
    setTasksList([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const renderTaskList = () => {
    return tasksList.map((task, index) => (
      <MyTasksContainerTasksStyled key={index}>
        <MyTasksTypographyStyled>{task.value}</MyTasksTypographyStyled>
        <MyTasksButtonStyled
          type="button"
          startIcon={<DeleteIcon />}
          onClick={() => removeTask(index)}
        >
          Delete
        </MyTasksButtonStyled>
      </MyTasksContainerTasksStyled>
    ));
  };

  return (
    <MyTasksStyled>
      <MyTasksFormStyled onSubmit={(e) => e.preventDefault()}>
        <MyTasksTextFieldStyled
          required
          label="Task Name"
          variant="standard"
          sx={{ m: 1 }}
          onChange={(e) => setHeader(e.target.value)}
          value={header}
        />

        <MyTasksButtonStyled
          type="button"
          startIcon={<AddIcon />}
          onClick={addTask}
        >
          Add
        </MyTasksButtonStyled>
      </MyTasksFormStyled>

      <>
        {renderTaskList()}

        <MyTasksButtonStyled
          type="button"
          startIcon={<DeleteIcon />}
          onClick={removeAllTasks}
        >
          Delete All
        </MyTasksButtonStyled>
      </>
    </MyTasksStyled>
  );
};

export { MyTasks };

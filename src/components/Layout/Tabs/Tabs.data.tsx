import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { MyTasks } from '../../PageContent/MyTasks';

type Data = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const tabsData = (): Data[] => [
  {
    icon: <HomeIcon />,
    name: 'Dashboard',
    href: '/',
  },

  {
    icon: <AssignmentIcon />,
    name: 'My Tasks',
    href: '/',
  },

  {
    icon: <EmojiEventsIcon />,
    name: 'Achivment',
    href: '/',
  },
];

const pageContent = (): React.ReactNode[] => [
  <p>test1</p>,
  <MyTasks />,
  <p>test3</p>,
];

export { tabsData, pageContent };

import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentIcon from '@mui/icons-material/Assignment';

type Data = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const navigationData = (): Data[] => [
  {
    icon: <HomeIcon />,
    name: 'Dashboard',
    href: '/',
  },

  {
    icon: <AssignmentIcon />,
    name: 'My Task',
    href: '/',
  },

  {
    icon: <EmojiEventsIcon />,
    name: 'Achivment',
    href: '/',
  },
];

export { navigationData };

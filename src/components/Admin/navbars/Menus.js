import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DoneAllIcon from '@mui/icons-material/DoneAll';
export const Menus = [
  {
    title: 'Home',
    icon: <HomeIcon className='fs-2' />,
    path: '/',
  },
  {
    title: 'User Info',
    icon: <PersonIcon className='fs-2' />,
    path: '/',
  },
  {
    title: 'All Bookings',
    icon: <EventAvailableIcon className='fs-2' />,
    path: '/',
  },
  {
    title: 'Completed Bookings',
    icon: <DoneAllIcon className='fs-2' />,
    path: '/',
  },
];

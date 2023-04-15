import { FiHome, FiStar, FiUsers } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

import { ROUTE_LIST } from './route-list';

export interface IMenuLinks {
  label: string;
  path: string;
  icon: IconType;
}

export const MENU_LINKS = [
  {
    label: 'Home',
    path: ROUTE_LIST.HOME,
    icon: FiHome
  },
  {
    label: 'Project',
    path: ROUTE_LIST.PROJECT,
    icon: FiStar
  },
  {
    label: 'Contact',
    path: ROUTE_LIST.CONTACT,
    icon: FiUsers
  }
];

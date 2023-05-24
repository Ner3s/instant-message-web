import { getItem } from './getItem';
import { setItem } from './setItem';

export const storage = {
  getItem,
  setItem
} as const;

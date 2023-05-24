import { TStorage } from '@/models/common/storage';

interface IGetItem {
  key: string;
  type?: TStorage;
}

export const getItem = <T>({ key, type = 'temporary' }: IGetItem): T | null => {
  const item =
    window[type === 'temporary' ? 'sessionStorage' : 'localStorage'].getItem(
      key
    );
  return item !== 'undefined' && item ? JSON.parse(item) : null;
};

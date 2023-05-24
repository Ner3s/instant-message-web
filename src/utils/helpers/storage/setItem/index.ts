import { TStorage } from '@/models/common/storage';

interface ISetItem {
  key: string;
  value: unknown;
  type?: TStorage;
}

export const setItem = ({ key, value, type = 'temporary' }: ISetItem) => {
  window[type === 'temporary' ? 'sessionStorage' : 'localStorage'].setItem(
    key,
    JSON.stringify(value)
  );
};

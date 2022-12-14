import { IUser } from './user';

export interface IContact {
  date: string;
  userInfo: Pick<IUser, 'uid' | 'name' | 'imageUrl'>;
}

export type TMapContacts = [[string, IContact]];

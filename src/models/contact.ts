import { IUser } from './user';

export type TUserInfo = Pick<IUser, 'uid' | 'name' | 'imageUrl'>;

export interface IContact {
  date: string;
  userInfo: TUserInfo;
}

export type TMapContacts = [[string, IContact]];

export class Contact implements IContact {
  constructor(public date: string, public userInfo: TUserInfo) {}
}

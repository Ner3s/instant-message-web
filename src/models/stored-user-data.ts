import { User } from 'firebase/auth';

import { TStoredUserDTO } from './stored-user-data.dto';

export interface IStoredUserData {
  auth: User;
  storedData: TStoredUserDTO;
}

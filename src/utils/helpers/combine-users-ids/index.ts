import { IUser } from '@/models/user';

interface ICombineUsersIds {
  currentUser: IUser;
  user: IUser;
}

//@TODO - Create test
function combineUsersIds({ currentUser, user }: ICombineUsersIds) {
  return currentUser.uid > user.uid
    ? currentUser.uid + user.uid
    : user.uid + currentUser.uid;
}

export { combineUsersIds };

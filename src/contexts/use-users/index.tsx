import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { IUser } from '@/models/user';

interface IUsersContextData {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  currentUser: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser>>;
}

interface IUsersProvider {
  children: ReactNode;
}

const UsersContext = createContext<IUsersContextData>({} as IUsersContextData);

function UsersProvider({ children }: IUsersProvider) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);

  return (
    <UsersContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUsers must be used within an UsersProvider');
  }

  return context;
}

export { UsersProvider, useUsers };

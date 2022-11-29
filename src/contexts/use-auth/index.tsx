import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { IUser } from '@/models/user';
import { remoteGetUserData } from '@/services/user/get-user-data';
import { GUEST_ROUTES } from '@/utils/constants/guest-routes';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import storedUserDataMapper from '@/utils/mapping/stored-user-data-mapper';

interface IAuthContextData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  handleClearSession: () => void;
  handleGetCurrentUser: () => void;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function AuthProvider({ children }: IAuthProvider) {
  const auth = getAuth();
  const router = useRouter();

  const [user, setUser] = useState<IUser>({} as IUser);

  async function handleClearSession() {
    try {
      await signOut(auth);
      toast.success('User successfully logged out');
      router.push(ROUTE_LIST.SIGN_IN);
    } catch (error) {
      toast.error(`Error, user don't logged out`);
    }
  }

  function handleGetCurrentUser() {
    onAuthStateChanged(auth, async (user) => {
      let userMapped: IUser = {} as IUser;

      if (!user) {
        !GUEST_ROUTES.includes(router.pathname as ROUTE_LIST) &&
          router.push(ROUTE_LIST.SIGN_IN);
        return null;
      }

      try {
        const response = await remoteGetUserData(user, false);

        if (response?.storedData) {
          userMapped = storedUserDataMapper({
            auth: user,
            storedData: response.storedData
          });
        }

        setUser(userMapped);

        if (user) {
          GUEST_ROUTES.includes(router.pathname as ROUTE_LIST) &&
            router.push(ROUTE_LIST.USERS);
        }
      } catch (error) {
        toast.error('Unexpected error');
      }
    });
  }

  useEffect(() => {
    handleGetCurrentUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleClearSession, handleGetCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

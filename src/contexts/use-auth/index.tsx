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
import storedUserDataMapper from '@/utils/mappings/stored-user-data-mapper';

interface IAuthContextData {
  user: IUser;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(true);

  async function handleClearSession() {
    try {
      await signOut(auth);
      toast.success('User successfully logged out, page will be reloaded');
      router.push(ROUTE_LIST.SIGN_IN);
    } catch (error) {
      toast.error(`Error, user don't logged out`);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }

  function handleGetCurrentUser() {
    onAuthStateChanged(auth, async (user) => {
      let userMapped: IUser = {} as IUser;

      if (!user) {
        !GUEST_ROUTES.includes(router.pathname as ROUTE_LIST) &&
          router.push(ROUTE_LIST.SIGN_IN);
        setIsLoading(false);
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
            router.push(ROUTE_LIST.HOME);
        }
        setIsLoading(false);
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
      value={{
        user,
        setUser,
        handleClearSession,
        handleGetCurrentUser,
        isLoading
      }}
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

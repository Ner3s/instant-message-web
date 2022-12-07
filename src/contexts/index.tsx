import { ReactNode } from 'react';

import { AuthProvider } from './use-auth';
import { UsersProvider } from './use-users';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UsersProvider>
      <AuthProvider>{children}</AuthProvider>
    </UsersProvider>
  );
}

export { AppProvider };

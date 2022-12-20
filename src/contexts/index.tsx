import { ReactNode } from 'react';

import { AuthProvider } from './use-auth';
import { ContactsProvider } from './use-contacts';
import { UsersProvider } from './use-users';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UsersProvider>
      <ContactsProvider>
        <AuthProvider>{children}</AuthProvider>
      </ContactsProvider>
    </UsersProvider>
  );
}

export { AppProvider };

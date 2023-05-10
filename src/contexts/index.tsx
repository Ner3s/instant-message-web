import { ReactNode } from 'react';

import { AuthProvider } from './use-auth';
import { ChatProvider } from './use-chat';
import { ContactsProvider } from './use-contacts';
import { ProjectProvider } from './use-project';
import { UsersProvider } from './use-users';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <UsersProvider>
      <ProjectProvider>
        <ContactsProvider>
          <ChatProvider>
            <AuthProvider>{children}</AuthProvider>
          </ChatProvider>
        </ContactsProvider>
      </ProjectProvider>
    </UsersProvider>
  );
}

export { AppProvider };

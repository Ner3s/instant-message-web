import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { IContact, TMapContacts } from '@/models/contact';

interface IContactsContextData {
  contacts: TMapContacts;
  setContacts: Dispatch<SetStateAction<TMapContacts>>;
  currentContact: IContact;
  setCurrentContact: Dispatch<SetStateAction<IContact>>;
}

interface IContactsProvider {
  children: ReactNode;
}

const ContactsContext = createContext<IContactsContextData>(
  {} as IContactsContextData
);

function ContactsProvider({ children }: IContactsProvider) {
  const [contacts, setContacts] = useState<TMapContacts>({} as TMapContacts);
  const [currentContact, setCurrentContact] = useState<IContact>(
    {} as IContact
  );

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, currentContact, setCurrentContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

function useContacts() {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error('useContacts must be used within an ContactsProvider');
  }

  return context;
}

export { ContactsProvider, useContacts };

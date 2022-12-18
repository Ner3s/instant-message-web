import { Base } from '@/components/Base';

import { ContactsTemplate } from '@/templates/Contacts';

import { useChat } from '@/contexts/use-chat';
import { useContacts } from '@/contexts/use-contacts';

import { useGetAllContacts } from '@/hooks/use-get-all-contacts';

import { TMapContacts } from '@/models/contact';

export default function Contacts() {
  const { isLoading } = useGetAllContacts({ execOnInit: true });
  const { contacts, imutableContacts, setContacts, setCurrentContact } =
    useContacts();
  const { setChatId } = useChat();

  function handleFindContacts(name: string) {
    if (!name) {
      setContacts(imutableContacts);
      return;
    }

    const fetchContacts = contacts.filter((contact) => {
      return contact[1].userInfo.name.includes(name) && contact;
    });

    fetchContacts.length !== 0 && setContacts(fetchContacts as TMapContacts);
  }

  return (
    <Base>
      <ContactsTemplate
        isLoading={isLoading}
        contacts={contacts}
        handleCurrentContact={setCurrentContact}
        handleFindContacts={handleFindContacts}
        setChatId={setChatId}
      />
    </Base>
  );
}

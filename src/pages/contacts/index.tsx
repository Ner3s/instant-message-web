import { Base } from '@/components/Base';

import { ContactsTemplate } from '@/templates/Contacts';

import { useContacts } from '@/contexts/use-contacts';

import { useGetAllContacts } from '@/hooks/use-get-all-contacts';

export default function Contacts() {
  const { isLoading } = useGetAllContacts({ execOnInit: true });
  const { contacts, setCurrentContact } = useContacts();

  return (
    <Base>
      <ContactsTemplate
        isLoading={isLoading}
        contacts={contacts}
        handleCurrentContact={setCurrentContact}
      />
    </Base>
  );
}

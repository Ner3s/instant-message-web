import { useEffect } from 'react';

import { ChatTemplate } from '@/templates/Chat';

import { useContacts } from '@/contexts/use-contacts';

export default function Chat() {
  const { currentContact } = useContacts();

  useEffect(() => {
    console.log(currentContact);
  }, [currentContact]);

  return <ChatTemplate />;
}

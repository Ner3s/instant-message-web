import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ChatTemplate } from '@/templates/Chat';

import { useChat } from '@/contexts/use-chat';
import { useContacts } from '@/contexts/use-contacts';

import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function Chat() {
  const { currentContact } = useContacts();
  const { chatId } = useChat();

  const router = useRouter();

  useEffect(() => {
    currentContact?.userInfo?.uid ?? router.push(ROUTE_LIST.CONTACT);

    console.log(chatId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ChatTemplate contact={currentContact} />;
}

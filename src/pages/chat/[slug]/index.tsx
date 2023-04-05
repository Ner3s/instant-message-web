import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ChatTemplate } from '@/templates/Chat';

import { useAuth } from '@/contexts/use-auth';
import { useChat } from '@/contexts/use-chat';
import { useContacts } from '@/contexts/use-contacts';

import { useGetMessagesByChatId } from '@/hooks/use-get-messages-by-chat-id';
import { useSendMessage } from '@/hooks/use-send-message';

import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function Chat() {
  const { currentContact } = useContacts();
  const { messages } = useChat();
  const { user } = useAuth();

  const router = useRouter();

  useGetMessagesByChatId({ execOnInit: true });
  const { handleSendMessage } = useSendMessage();

  useEffect(() => {
    currentContact?.userInfo?.uid ?? router.push(ROUTE_LIST.CONTACT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChatTemplate
      user={user}
      contact={currentContact}
      messages={messages}
      handleSendMessage={handleSendMessage}
    />
  );
}

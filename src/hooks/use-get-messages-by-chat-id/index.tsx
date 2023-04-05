import { useEffect, useState } from 'react';

import { getMessagesByChatId } from './get-messages-by-chat-id';

import { useChat } from '@/contexts/use-chat';

interface IUseGetMessagesByChatId {
  execOnInit: boolean;
}

function useGetMessagesByChatId({
  execOnInit = false
}: IUseGetMessagesByChatId) {
  const [isLoading, setIsLoading] = useState(false);
  const { chatId, setMessages } = useChat();

  function handleGetMessagesByChatId() {
    getMessagesByChatId({ chatId, setIsLoading, setMessages });
  }

  useEffect(() => {
    chatId && execOnInit && handleGetMessagesByChatId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId]);

  return { handleGetMessagesByChatId, isLoading };
}

export { useGetMessagesByChatId };

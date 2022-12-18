import { useState } from 'react';

import { sendMessage } from './send-message';

import { useChat } from '@/contexts/use-chat';

interface IHandleSendMessage {
  chatId: string;
  text: string;
  userId: string;
}

function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);
  const { chatId } = useChat();

  function handleSendMessage({ text, userId }: IHandleSendMessage) {
    sendMessage({ setIsLoading, chatId, text, userId });
  }

  return { isLoading, handleSendMessage };
}

export { useSendMessage };

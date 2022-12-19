import { useState } from 'react';

import { sendMessage } from './send-message';

import { useChat } from '@/contexts/use-chat';

import { ISendMessageDTO } from '@/models/send-message.dto';

function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);
  const { chatId } = useChat();

  function handleSendMessage({ text, senderId }: ISendMessageDTO) {
    sendMessage({ setIsLoading, chatId, text, senderId });
  }

  return { isLoading, handleSendMessage };
}

export { useSendMessage };

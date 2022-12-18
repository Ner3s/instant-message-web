import { toast } from 'react-toastify';

import { remoteSendMessage } from '@/services/chat/send-message';

interface ISendMessage {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  chatId: string;
  text: string;
  userId: string;
}

async function sendMessage({
  setIsLoading,
  chatId,
  text,
  userId
}: ISendMessage) {
  setIsLoading(true);
  try {
    await remoteSendMessage({ chatId, text, userId });
  } catch (error: unknown) {
    toast.error('Error sending message');
  } finally {
    setIsLoading(false);
  }
}

export { sendMessage };

import { toast } from 'react-toastify';

import { remoteSendMessage } from '@/services/chat/send-message';

interface ISendMessage {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  chatId: string;
  text: string;
  senderId: string;
}

async function sendMessage({
  setIsLoading,
  chatId,
  text,
  senderId
}: ISendMessage) {
  setIsLoading(true);
  try {
    await remoteSendMessage({ chatId, text, senderId });
  } catch (error: unknown) {
    toast.error('Error sending message');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}

export { sendMessage };

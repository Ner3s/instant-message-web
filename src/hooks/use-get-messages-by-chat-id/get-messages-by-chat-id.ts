import { Dispatch, SetStateAction } from 'react';

import { onSnapshot } from 'firebase/firestore';

import { IMessage } from '@/models/message';
import { remoteGetMessagesByChatId } from '@/services/chat/get-messages-by-chat-id';
interface IGetMessagesByChatId {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
  chatId: string;
}

function getMessagesByChatId({
  setIsLoading,
  chatId,
  setMessages
}: IGetMessagesByChatId) {
  setIsLoading(true);
  try {
    const unSub = onSnapshot(remoteGetMessagesByChatId({ chatId }), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  } catch (error) {
    //
    console.error(error, 'dont get messages');
  } finally {
    setIsLoading(false);
  }
}

export { getMessagesByChatId };

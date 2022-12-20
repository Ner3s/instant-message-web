import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { IMessage } from '@/models/message';

interface IChatContextData {
  chatId: string;
  setChatId: Dispatch<SetStateAction<string>>;
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

interface IChatProvider {
  children: ReactNode;
}

const ChatContext = createContext<IChatContextData>({} as IChatContextData);

function ChatProvider({ children }: IChatProvider) {
  const [chatId, setChatId] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <ChatContext.Provider value={{ chatId, setChatId, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChat must be used within an ChatProvider');
  }

  return context;
}

export { ChatProvider, useChat };

import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

import { ContactCard } from '@/components/ContactCard';
import { Input } from '@/components/Input';

import { useDebounce } from '@/hooks/use-debounce';

import { IContact, TMapContacts } from '@/models/contact';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

export interface ContactsTemplateProps {
  contacts?: TMapContacts;
  isLoading: boolean;
  handleCurrentContact: React.Dispatch<React.SetStateAction<IContact>>;
  handleFindContacts(name: string): void;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
}

function ContactsTemplate({
  contacts,
  isLoading,
  handleCurrentContact,
  handleFindContacts,
  setChatId
}: ContactsTemplateProps) {
  const router = useRouter();

  const deboucedSearch = useDebounce(handleFindContacts, 500);

  const handleGoToUserChat = (contact: IContact, chatId: string) => {
    handleCurrentContact(contact);
    setChatId(chatId);
    contact?.userInfo &&
      router.push(ROUTE_LIST.CHAT.replace(':slug', contact?.userInfo.uid));
  };

  return (
    <S.Container>
      <S.Navbar>
        <h2>Contacts</h2>
      </S.Navbar>
      <S.Form>
        <Input
          type="search"
          icon={<FiSearch size={22} />}
          iconAlign="left"
          name="search_contact"
          placeholder="Search contact"
          onChange={(e) => {
            deboucedSearch(e.target.value.toLocaleLowerCase());
          }}
        />
      </S.Form>
      <S.ContactsWrapper>
        {contacts?.length
          ? contacts?.map(([chatId, contact]) => (
              <ContactCard
                key={chatId}
                name={contact.userInfo.name}
                imageUrl={contact.userInfo.imageUrl}
                // lastMessage={contact[1].userInfo.lastMessage}
                handleGoToChat={() => handleGoToUserChat(contact, chatId)}
              />
            ))
          : !isLoading &&
            !contacts?.length && <p>You don&apos;t have contacts!</p>}
      </S.ContactsWrapper>
    </S.Container>
  );
}

export { ContactsTemplate };

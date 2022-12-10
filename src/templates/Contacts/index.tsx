import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { ContactCard } from '@/components/ContactCard';
import { Input } from '@/components/Input';

import { useDebounce } from '@/hooks/use-debounce';

import { IUser } from '@/models/user';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

function ContactsTemplate() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const deboucedSearch = useDebounce(setSearch, 500);

  const handleGoToUserChat = (user: Partial<IUser>) => {
    console.log(user); // TODO - Change THIS
    user.uid && router.push(ROUTE_LIST.CHAT.replace(':slug', user.uid));
  };

  useEffect(() => {
    search !== '' && console.log(search); // TODO - Change THIS
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
            e.target.value.length !== 0 &&
              deboucedSearch(e.target.value.toLocaleLowerCase());
          }}
        />
      </S.Form>
      <S.ContactsWrapper>
        <ContactCard
          name={'teste ' + Math.floor(Math.random() * 100)}
          imageUrl={`https://picsum.photos/200/300?${Math.floor(
            Math.random() * 100
          )}`}
          description="lorem ipsum"
          handleGoToChat={() =>
            handleGoToUserChat({ name: 'teste', uid: '123' })
          }
        />
        <ContactCard
          name={'teste ' + Math.floor(Math.random() * 100)}
          imageUrl={`https://picsum.photos/200/300?`}
          description="lorem ipsum"
          handleGoToChat={() =>
            handleGoToUserChat({ name: 'teste', uid: '123' })
          }
        />
      </S.ContactsWrapper>
    </S.Container>
  );
}

export { ContactsTemplate };

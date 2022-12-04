import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input } from '@/components/Input';
import { MyProfileModal } from '@/components/MyProfileModal';
import { UserModal } from '@/components/UserModal';

import { useDebounce } from '@/hooks/use-debounce';

import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

interface HomeTemplateProps {
  handleLogout: () => void;
  name: string;
  imageUrl: string;
}

function HomeTemplate({ handleLogout, imageUrl, name }: HomeTemplateProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const deboucedSearch = useDebounce(setSearch, 500);

  return (
    <S.Container>
      <MyProfileModal
        handleGotoProfile={() => {
          router.push(ROUTE_LIST.PROFILE);
        }}
        handleGotoProfileEdit={() => {
          router.push(ROUTE_LIST.PROFILE_EDIT);
        }}
        handleLogout={handleLogout}
        name={name}
        imageUrl={imageUrl}
      />
      <S.Form>
        <Input
          name="search"
          type="search"
          icon={<FiSearch size={22} />}
          iconAlign="left"
          placeholder="Search users"
          onChange={(e) => {
            deboucedSearch(e.target.value);
          }}
        />
      </S.Form>
      {search && (
        <S.Content>
          <S.Subtitle>Result: </S.Subtitle>
          <UserModal
            name="User 1"
            description="lorem ipsum"
            handleGotoProfile={() => console.log('go to profile')}
            imageUrl="http://lorempixel.com.br/500/400/?1"
          />
        </S.Content>
      )}
    </S.Container>
  );
}

export { HomeTemplate };

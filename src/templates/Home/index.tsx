import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input } from '@/components/Input';
import { MyProfileCard } from '@/components/MyProfileCard';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';

import { useDebounce } from '@/hooks/use-debounce';

import { IUser } from '@/models/user';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

export interface HomeTemplateProps {
  handleLogout: () => void;
  myProfile: Pick<IUser, 'name' | 'imageUrl'>;
  users?: IUser[];
  handleFindUser: (search: string) => Promise<void>;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLoading: boolean;
}

function HomeTemplate({
  handleLogout,
  myProfile,
  users,
  handleFindUser,
  setCurrentUser,
  isLoading
}: HomeTemplateProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const deboucedSearch = useDebounce(setSearch, 500);

  const handleGotoUserProfile = (user: IUser) => {
    setCurrentUser(user);
    router.push(ROUTE_LIST.PROFILE_SLUG.replace(':slug', user.uid));
  };

  useEffect(() => {
    search !== '' && handleFindUser(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <S.Container>
      <MyProfileCard
        handleGotoProfile={() => {
          router.push(ROUTE_LIST.PROFILE);
        }}
        handleGotoProfileEdit={() => {
          router.push(ROUTE_LIST.PROFILE_EDIT);
        }}
        handleLogout={handleLogout}
        name={myProfile.name}
        imageUrl={myProfile.imageUrl}
      />
      <S.Form>
        <Input
          name="search"
          type="search"
          icon={<FiSearch size={22} />}
          iconAlign="left"
          placeholder="Search users"
          onChange={(e) => {
            deboucedSearch(e.target.value.toLocaleLowerCase());
          }}
        />
      </S.Form>
      {isLoading && (
        <S.WrapperSpinner>
          <Spinner />
        </S.WrapperSpinner>
      )}
      {!!users?.length && (
        <S.Content>
          <S.Subtitle>Result: </S.Subtitle>
          <S.WrapperUsers>
            {users?.map((user) => (
              <UserCard
                key={user.uid}
                name={user.name}
                description={user.description}
                handleGotoProfile={() => handleGotoUserProfile(user)}
                imageUrl={user.imageUrl}
              />
            ))}
          </S.WrapperUsers>
        </S.Content>
      )}
      {!!search && !users?.length && !isLoading && (
        <S.NoUsers>
          <S.Subtitle>No users found</S.Subtitle>
        </S.NoUsers>
      )}
    </S.Container>
  );
}

export { HomeTemplate };

import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';

import { Input } from '@/components/Input';
import { MyProfileModal } from '@/components/MyProfileModal';

import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

interface UserTemplateProps {
  handleLogout: () => void;
  name: string;
  imageUrl: string;
}

function UsersTemplate({ handleLogout, imageUrl, name }: UserTemplateProps) {
  const router = useRouter();

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
        />
      </S.Form>
      <S.Content>
        <S.Subtitle>Result: </S.Subtitle>
      </S.Content>
    </S.Container>
  );
}

export { UsersTemplate };

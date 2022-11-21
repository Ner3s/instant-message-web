import Link from 'next/link';

import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

function UsersTemplate() {
  return (
    <S.Container>
      <Link href={ROUTE_LIST.PROFILE}>PROFILE</Link>
      <Link href={ROUTE_LIST.PROFILE_SLUG}>PROFILE_SLUG</Link>
      <Link href={ROUTE_LIST.PROFILE_SLUG_EDIT}>PROFILE_SLUG_EDIT</Link>
    </S.Container>
  );
}

export { UsersTemplate };

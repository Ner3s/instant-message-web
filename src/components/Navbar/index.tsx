import { useRouter } from 'next/router';
import { FiMessageCircle, FiUsers } from 'react-icons/fi';

import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

const ITEMS_COLORS = '#fff';
const ITEMS_SIZES = 24;

function Navbar() {
  const router = useRouter();

  return (
    <S.Container>
      <S.SvgWrapper role="link" onClick={() => router.push(ROUTE_LIST.USERS)}>
        <FiUsers size={ITEMS_SIZES} color={ITEMS_COLORS} />
        <S.MenuLabel>Users</S.MenuLabel>
      </S.SvgWrapper>
      <S.SvgWrapper role="link" onClick={() => router.push(ROUTE_LIST.CHAT)}>
        <FiMessageCircle size={ITEMS_SIZES} color={ITEMS_COLORS} />
        <S.MenuLabel>Chat</S.MenuLabel>
      </S.SvgWrapper>
    </S.Container>
  );
}

export { Navbar };

import { useRouter } from 'next/router';
import { FiHome, FiUsers } from 'react-icons/fi';

import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

const ITEMS_COLORS = {
  active: '#0097B8',
  noActive: '#fff'
};
const ITEMS_SIZES = 24;

function Navbar() {
  const router = useRouter();

  const handleActiveRoute = (linkToRedirect: string) =>
    linkToRedirect === router?.pathname;

  const handleIconColors = (pathRoute: string) =>
    handleActiveRoute(pathRoute) ? ITEMS_COLORS.active : ITEMS_COLORS.noActive;

  return (
    <S.Container>
      <S.MenuItem
        isActive={handleActiveRoute(ROUTE_LIST.HOME)}
        role="link"
        onClick={() => router.push(ROUTE_LIST.HOME)}
      >
        <S.WrapperMenuItem>
          <FiHome
            size={ITEMS_SIZES}
            color={handleIconColors(ROUTE_LIST.HOME)}
          />
          <S.MenuLabel>Home</S.MenuLabel>
        </S.WrapperMenuItem>
      </S.MenuItem>
      <S.MenuItem
        isActive={handleActiveRoute(ROUTE_LIST.CONTACT)}
        role="link"
        onClick={() => router.push(ROUTE_LIST.CONTACT)}
      >
        <S.WrapperMenuItem>
          <FiUsers
            size={ITEMS_SIZES}
            color={handleIconColors(ROUTE_LIST.CONTACT)}
          />
          <S.MenuLabel>Contacts</S.MenuLabel>
        </S.WrapperMenuItem>
      </S.MenuItem>
    </S.Container>
  );
}

export { Navbar };

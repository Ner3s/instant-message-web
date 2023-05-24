import { useRouter } from 'next/router';

import { IMenuLinks } from '@/utils/constants/menu-links';

import * as S from './styles';

const ITEMS_COLORS = {
  active: '#0097B8',
  noActive: '#fff'
};
const ITEMS_SIZES = 24;

interface INavbarProps {
  menuLinks: IMenuLinks[];
}

function Navbar({ menuLinks }: INavbarProps) {
  const router = useRouter();

  const handleActiveRoute = (linkToRedirect: string) =>
    linkToRedirect === router?.pathname;

  const handleIconColors = (pathRoute: string) =>
    handleActiveRoute(pathRoute) ? ITEMS_COLORS.active : ITEMS_COLORS.noActive;

  return (
    <S.Container>
      {menuLinks.map(({ icon: Icon, path, label }) => (
        <S.MenuItem
          key={label}
          isActive={handleActiveRoute(path)}
          role="link"
          onClick={() => router.push(path)}
        >
          <S.WrapperMenuItem>
            <Icon size={ITEMS_SIZES} color={handleIconColors(path)} />
            <S.MenuLabel>{label}</S.MenuLabel>
          </S.WrapperMenuItem>
        </S.MenuItem>
      ))}
    </S.Container>
  );
}

export { Navbar };

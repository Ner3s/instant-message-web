import { ReactNode } from 'react';

import { Navbar } from '@/components/Navbar';

import { MENU_LINKS } from '@/utils/constants/menu-links';

import * as S from './styles';

export interface BaseProps {
  children: ReactNode;
}

function Base({ children }: BaseProps) {
  return (
    <S.Container>
      <S.Main>{children}</S.Main>
      <Navbar menuLinks={MENU_LINKS} />
    </S.Container>
  );
}

export { Base };

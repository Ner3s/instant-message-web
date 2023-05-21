import { ReactNode } from 'react';

import { Navbar } from '@/components/Navbar';

import { Spinner } from '../Spinner';

import { useAuth } from '@/contexts/use-auth';

import { MENU_LINKS } from '@/utils/constants/menu-links';

import * as S from './styles';

export interface BaseProps {
  children: ReactNode;
}

function Base({ children }: BaseProps) {
  const { isLoading } = useAuth();
  return (
    <S.Container>
      <S.Main>
        {isLoading ? (
          <S.WrapperSpinner>
            <Spinner size="14rem" color="#fff" />
          </S.WrapperSpinner>
        ) : (
          children
        )}
      </S.Main>
      <Navbar menuLinks={MENU_LINKS} />
    </S.Container>
  );
}

export { Base };

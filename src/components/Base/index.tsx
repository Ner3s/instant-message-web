import { ReactNode } from 'react';

import { Navbar } from '@/components/Navbar';

import * as S from './styles';

export interface BaseProps {
  children: ReactNode;
}

function Base({ children }: BaseProps) {
  return (
    <S.Container>
      <S.Main>{children}</S.Main>
      <Navbar />
    </S.Container>
  );
}

export { Base };

import * as S from './styles';

export interface BalloonMessageProps {
  children: React.ReactNode;
  side?: 'RIGHT' | 'LEFT';
}

function BalloonMessage({ children, side = 'RIGHT' }: BalloonMessageProps) {
  return <S.Container side={side}>{children}</S.Container>;
}

export { BalloonMessage };

import * as S from './styles';

export interface TooltipProps {
  children: React.ReactNode;
}

function Tooltip({ children }: TooltipProps) {
  return (
    <S.Container className="tooltip">
      <span>{children}</span>
    </S.Container>
  );
}

export { Tooltip };

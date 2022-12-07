import { CSSProperties } from 'react';

import * as S from './styles';

export interface SpinnerProps {
  containerStyles?: CSSProperties;
  spinnerStyles?: CSSProperties;
  height?: string;
  size?: string;
  barsSize?: string;
  color?: string;
}

function Spinner({
  containerStyles,
  height,
  color,
  barsSize,
  size,
  spinnerStyles
}: SpinnerProps) {
  return (
    <S.Container data-testid="spinner" height={height} style={containerStyles}>
      <S.Spinner
        barsSize={barsSize}
        style={spinnerStyles}
        size={size}
        color={color}
      />
    </S.Container>
  );
}

export { Spinner };

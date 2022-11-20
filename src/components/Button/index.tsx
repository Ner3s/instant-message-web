import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  txtColor?: string;
  bgColor?: string;
  isLoading?: boolean;
  children: ReactNode | string;
  containerStyles?: CSSProperties;
}

function Button({
  txtColor,
  bgColor,
  children,
  containerStyles,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      txtColor={txtColor}
      bgColor={bgColor}
      isLoading={isLoading}
      style={containerStyles}
      type="button"
      {...rest}
    >
      {isLoading ? '' : children}
    </S.Container>
  );
}

export { Button };

import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import * as S from './styles';

export type TAppearance = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  txtColor?: string;
  bgColor?: string;
  isLoading?: boolean;
  children: ReactNode | string;
  containerStyles?: CSSProperties;
  appearance?: TAppearance;
}

function Button({
  txtColor,
  bgColor,
  children,
  containerStyles,
  isLoading,
  appearance = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <S.Button
      txtColor={txtColor}
      bgColor={bgColor}
      isLoading={isLoading}
      style={containerStyles}
      appearance={appearance}
      type="button"
      {...rest}
    >
      {isLoading ? '' : children}
    </S.Button>
  );
}

export { Button };

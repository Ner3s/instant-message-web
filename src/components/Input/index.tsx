import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  margin?: boolean;
  containerStyles?: CSSProperties;
  icon?: ReactNode;
  iconAlign?: 'left' | 'right';
  errorMessage?: string;
}

function Input({
  name,
  containerStyles,
  margin,
  icon: Icon,
  iconAlign = 'right',
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <>
      <S.Container
        isErrored={!errorMessage}
        margin={margin}
        style={containerStyles}
      >
        {iconAlign === 'left' && Icon}
        <input type="text" name={name} {...rest} />
        {iconAlign === 'right' && Icon}
      </S.Container>
      {!errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
    </>
  );
}

export { Input };

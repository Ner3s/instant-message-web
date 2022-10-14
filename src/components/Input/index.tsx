import { CSSProperties, InputHTMLAttributes, ReactNode, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  margin?: boolean;
  containerStyles?: CSSProperties;
  icon?: ReactNode;
  iconAlign?: 'left' | 'right';
  errorMessage?: string;
  showIconPassword?: boolean;
  txtColor?: string;
}

function Input({
  name,
  containerStyles,
  margin,
  icon: Icon,
  iconAlign = 'right',
  errorMessage,
  showIconPassword,
  txtColor,
  ...rest
}: InputProps) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <>
      <S.Container
        isErrored={!!errorMessage}
        margin={margin}
        style={containerStyles}
        txtColor={txtColor}
      >
        {iconAlign === 'left' && Icon}
        <input
          type="text"
          name={name}
          {...(showIconPassword && !passwordIsVisible && { type: 'password' })}
          {...rest}
        />
        {iconAlign === 'right' && Icon}
        {showIconPassword &&
          (!passwordIsVisible ? (
            <AiOutlineEye
              role="showPassword"
              fontSize={24}
              color="black"
              onClick={() => setPasswordIsVisible((prevState) => !prevState)}
            />
          ) : (
            <AiOutlineEyeInvisible
              role="hidePassword"
              fontSize={24}
              color="black"
              onClick={() => setPasswordIsVisible((prevState) => !prevState)}
            />
          ))}
      </S.Container>
      {!!errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
    </>
  );
}

export { Input };

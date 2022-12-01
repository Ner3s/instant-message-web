import { CSSProperties, InputHTMLAttributes, ReactNode, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import * as S from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  margin?: boolean;
  containerStyles?: CSSProperties;
  icon?: ReactNode;
  iconAlign?: 'left' | 'right';
  errorMessage?: string;
  showIconPassword?: boolean;
  txtColor?: string;
  className?: string;
};

function Input({
  name,
  containerStyles,
  margin = true,
  icon: Icon,
  iconAlign = 'right',
  errorMessage,
  showIconPassword,
  txtColor,
  className,
  ...rest
}: InputProps) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleInputVisibility = () => {
    setPasswordIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <S.Container
        {...(className && { className: className })}
        isErrored={!!errorMessage}
        margin={margin}
        style={containerStyles}
        txtColor={txtColor}
      >
        <S.LabelAccessibility>{rest.placeholder}</S.LabelAccessibility>
        {iconAlign === 'left' && Icon}
        <input
          aria-label={rest.placeholder}
          title={rest.placeholder}
          type="text"
          name={name}
          {...(showIconPassword && !passwordIsVisible && { type: 'password' })}
          {...rest}
        />
        {iconAlign === 'right' && Icon}
        {showIconPassword &&
          (!passwordIsVisible ? (
            <AiOutlineEye
              role="button"
              tabIndex={0}
              fontSize={24}
              color="black"
              aria-label="show password"
              onClick={handleInputVisibility}
            />
          ) : (
            <AiOutlineEyeInvisible
              role="button"
              tabIndex={0}
              fontSize={24}
              color="black"
              aria-label="hide password"
              onClick={handleInputVisibility}
            />
          ))}
      </S.Container>
      {!!errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
    </>
  );
}

export { Input };

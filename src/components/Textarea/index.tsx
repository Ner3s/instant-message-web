import { CSSProperties, ReactNode, TextareaHTMLAttributes } from 'react';

import * as S from './styles';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  margin?: boolean;
  containerStyles?: CSSProperties;
  icon?: ReactNode;
  iconAlign?: 'left' | 'right';
  errorMessage?: string;
  txtColor?: string;
  className?: string;
};

function Textarea({
  name,
  containerStyles,
  margin = true,
  icon: Icon,
  iconAlign = 'right',
  errorMessage,
  txtColor,
  className,
  ...rest
}: TextareaProps) {
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
        <textarea
          aria-label={rest.placeholder}
          title={rest.placeholder}
          name={name}
          {...rest}
        />
      </S.Container>
      {!!errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
    </>
  );
}

export { Textarea };

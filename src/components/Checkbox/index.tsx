import { CSSProperties, forwardRef } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  name: string;
  errorMessage?: string;
  txtColor?: string;
  containerStyles?: CSSProperties;
  className?: string;
  value: string | number | string[] | undefined | boolean;
  checked?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

// eslint-disable-next-line react/display-name
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      className,
      errorMessage,
      containerStyles,
      value,
      label,
      checked,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <S.Container
          {...(className && { className: className })}
          isErrored={!!errorMessage}
          style={containerStyles}
        >
          <input
            ref={ref}
            aria-label={label}
            title={label}
            type="checkbox"
            name={name}
            {...rest}
            checked={checked}
            value={value as never}
          />
          <span className="box" />
          <S.Label>{label}</S.Label>
        </S.Container>
        {!!errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
      </>
    );
  }
);

export { Checkbox };

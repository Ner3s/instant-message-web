/* eslint-disable @next/next/no-img-element */

import { CSSProperties } from 'react';

import { InputProps } from '../Input';

import * as S from './styles';

export type FileInputProps = InputProps & {
  image_url?: string;
  fileContainerStyles?: CSSProperties;
  fileClassName?: string;
};

function FileInput({
  image_url,
  fileContainerStyles,
  fileClassName,
  ...props
}: FileInputProps) {
  return (
    <S.Container
      {...(fileClassName && { className: fileClassName })}
      style={fileContainerStyles}
      image_url={!!image_url}
    >
      <S.InputContainer
        data-testid="input-file"
        type="file"
        {...props}
        {...(image_url && {
          icon: <img src={image_url} alt="Input file image" />
        })}
      />
    </S.Container>
  );
}

export { FileInput };

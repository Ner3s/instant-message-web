/* eslint-disable @next/next/no-img-element */

import { InputProps } from '../Input';

import * as S from './styles';

export type FileInputProps = InputProps & { image_url?: string };

function FileInput({ image_url, ...props }: FileInputProps) {
  return (
    <S.Container image_url={!!image_url}>
      <S.InputContainer
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

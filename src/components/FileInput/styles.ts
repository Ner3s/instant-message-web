import styled, { css } from 'styled-components';

import { Input } from '../Input';

interface IContainerFileInput {
  image_url?: boolean;
}

interface IInputContainer {
  appearance?: 'circle' | 'none';
}

export const InputContainer = styled(Input)<IInputContainer>`
  ${({ theme, appearance }) => css`
    width: ${appearance === 'circle' ? theme.frameSizes.xsmall : '100%'};
    height: ${appearance === 'circle' ? theme.frameSizes.xsmall : '100%'};
    border-radius: ${appearance === 'circle' ? '50%' : '0'};
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

    & span {
      font-size: ${theme.font.sizes.xsmall};
      text-align: center;
    }

    & input {
      display: none;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  `}
`;

export const Container = styled.div<IContainerFileInput>`
  ${({ image_url }) => css`
    width: auto;
    height: auto;

    ${InputContainer} > span {
      display: ${image_url ? 'none' : 'block'};
    }
  `}
`;

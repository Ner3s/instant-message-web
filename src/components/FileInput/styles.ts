import styled, { css } from 'styled-components';

import { Input } from '../Input';

interface IContainerFileInput {
  image_url?: boolean;
}

export const InputContainer = styled(Input)`
  ${({ theme }) => css`
    width: ${theme.frameSizes.xsmall};
    height: ${theme.frameSizes.xsmall};
    border-radius: 50%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;

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

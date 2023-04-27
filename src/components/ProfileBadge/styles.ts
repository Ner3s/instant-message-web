import styled, { css } from 'styled-components';

import { Theme } from '@/styles/theme/styled';

interface ISizeComponent {
  width: keyof Theme['frameSizes'] | '100%';
  height: keyof Theme['frameSizes'];
}

export const ImageProfile = styled.img<ISizeComponent>`
  ${({ theme, width, height }) => css`
    width: ${width === '100%' ? width : theme.frameSizes[width]};
    height: ${theme.frameSizes[height]};
    object-fit: cover;
    border-radius: ${theme.spacings.hero};
  `}
`;

export const Circle = styled.div<ISizeComponent>`
  ${({ theme, width, height }) => css`
    width: ${width === '100%' ? width : theme.frameSizes[width]};
    height: ${theme.frameSizes[height]};
    border-radius: ${theme.spacings.hero};
    background-color: ${theme.colors.gray11};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

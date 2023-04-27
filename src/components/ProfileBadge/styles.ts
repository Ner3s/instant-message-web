import styled, { css } from 'styled-components';

import { frameSizes } from '@/styles/theme/frameSizes';
import { Theme } from '@/styles/theme/styled';

const allFrameSizes = Object.keys(frameSizes);
type TFrameSizes = keyof Theme['frameSizes'];

interface ISizeComponent {
  width: TFrameSizes | string;
  height: TFrameSizes | string;
}

export const ImageProfile = styled.img<ISizeComponent>`
  ${({ theme, width, height }) => css`
    width: ${allFrameSizes.includes(width)
      ? theme.frameSizes[width as TFrameSizes]
      : width};
    height: ${allFrameSizes.includes(height)
      ? theme.frameSizes[height as TFrameSizes]
      : height};
    object-fit: cover;
    border-radius: ${theme.spacings.hero};
  `}
`;

export const Circle = styled.div<ISizeComponent>`
  ${({ theme, width, height }) => css`
    width: ${allFrameSizes.includes(width)
      ? theme.frameSizes[width as TFrameSizes]
      : width};
    height: ${allFrameSizes.includes(height)
      ? theme.frameSizes[height as TFrameSizes]
      : height};
    border-radius: ${theme.spacings.hero};
    background-color: ${theme.colors.gray11};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

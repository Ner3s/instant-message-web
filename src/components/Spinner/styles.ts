import styled, { css } from 'styled-components';

export const Container = styled.div<{ height?: string }>`
  ${({ height, theme }) => css`
    position: relative;
    width: 100%;
    height: ${height ?? theme.frameSizes.xsmall};
  `}
`;

interface ISpinner {
  size?: string;
  color?: string;
  barsSize?: string;
}

export const Spinner = styled.div<ISpinner>`
  ${({ theme, size, color, barsSize }) => css`
    cursor: not-allowed;
    color: ${color ?? theme.colors.primary};
    ::after {
      width: ${size ?? theme.spacings.xxhero};
      height: ${size ?? theme.spacings.xxhero};
      content: '';
      position: absolute;
      border: ${barsSize ?? theme.spacings.tiny} solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 50%;
      animation: rotateLoading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    @keyframes rotateLoading {
      0% {
        transform: translate3d(-50%, -50%, 0) rotate(0);
      }
      100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
      }
    }
  `}
`;

import styled, { css, DefaultTheme } from 'styled-components';

import { TAppearance } from '.';

interface IButtonProps {
  txtColor?: string;
  bgColor?: string;
  isLoading?: boolean;
  appearance?: TAppearance;
}

type TModiefier = IButtonProps & { theme: DefaultTheme };

const modifier = {
  primary: ({ bgColor, theme }: TModiefier) => css`
    ${!bgColor
      ? `background-image: ${theme.colors.gradient.horizontal}`
      : `background-color: ${bgColor}`};
  `,
  secondary: ({ bgColor, theme, txtColor }: TModiefier) => css`
    color: ${txtColor ?? theme.colors.primary};
    background-color: ${bgColor ?? theme.colors.deepWhite};
    background-image: ${theme.colors.gradient.horizontal};

    background: linear-gradient(
          ${bgColor ?? theme.colors.deepWhite},
          ${bgColor ?? theme.colors.deepWhite}
        )
        padding-box,
      ${theme.colors.gradient.horizontal};
    border: 4px solid transparent;
  `
};

export const Container = styled.button<IButtonProps>`
  ${({ theme, isLoading, bgColor, txtColor, appearance = 'primary' }) => css`
    width: 100%;g
    height: ${theme.spacings.xhuge};
    font-weight: 600;
    color: ${txtColor ?? theme.colors.deepWhite};
    transition: all 200ms ease-in;
    outline: none;
    border: none;
    border-radius: ${theme.spacings.xhuge};
    position: relative;
    cursor: pointer;
    padding: 0;

    ${modifier[appearance]({ bgColor, theme })}

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 1;
    }

    :disabled {
      border: none !important;
      color: ${theme.colors.deepWhite};
      background-color: ${theme.colors.gray3};
      background-image: none;
      opacity: 1;
      cursor: not-allowed;
    }

    ${
      isLoading &&
      css`
        cursor: not-allowed;
        opacity: 0.4 !important;
        ::after {
          width: 2rem;
          height: 2rem;
          content: '';
          position: absolute;
          border: 0.2rem solid;
          border-top-color: transparent;
          border-bottom-color: transparent;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
          border-radius: 50%;
          animation: rotateLoading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }
      `
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

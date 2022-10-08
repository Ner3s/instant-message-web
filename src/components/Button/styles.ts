import styled, { css } from 'styled-components';

interface IButtonProps {
  txtColor?: string;
  bgColor?: string;
  isLoading?: boolean;
}

export const Container = styled.button<IButtonProps>`
  ${({ theme, isLoading }) => css`
    width: 100%;
    height: 5rem;
    color: ${theme.colors.deepWhite};
    background-image: ${theme.colors.gradient.horizontal};
    transition: all 200ms ease-in;
    outline: none;
    border: none;
    border-radius: 5rem;
    position: relative;
    cursor: pointer;
    padding: 0;

    :hover {
      opacity: 0.8;
    }

    :active {
      background-image: ${theme.colors.gradient.horizontal};
      opacity: 1;
    }

    :disabled {
      border: none !important;
      color: #fff;
      background-color: #cccccc;
      opacity: 1;
      cursor: not-allowed;
    }

    ${isLoading &&
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
    `}

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

import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.xhuge};
    background-image: ${theme.colors.gradient.horizontal};
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
  `};
`;

export const MenuItem = styled.div<{ isActive?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      > div {
        background-color: ${theme.colors.deepWhite};

        span {
          color: ${theme.colors.primary};
        }
      }
    `}
`;

export const WrapperMenuItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.tiny};
    border-radius: ${theme.spacings.small};
  `}
`;

export const MenuLabel = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.deepWhite};
  `};
`;

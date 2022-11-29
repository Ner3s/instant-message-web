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

export const SvgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuLabel = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.deepWhite};
  `};
`;

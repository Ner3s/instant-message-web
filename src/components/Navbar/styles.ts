import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings.xhuge};
    background-image: ${theme.colors.gradient.horizontal};
    display: flex;
    justify-content: space-around;
    align-items: center;
  `};
`;

export const SvgWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > span {
      padding: 0 ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.deepWhite};
    }
  `};
`;

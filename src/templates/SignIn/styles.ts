import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    background-image: ${theme.colors.gradient.vertical};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.deepWhite};
    font-size: ${theme.font.sizes.large};
    font-weight: 900;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Content = styled.form`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.deepWhite};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.huge} ${theme.spacings.large};
    border-radius: ${theme.spacings.xxhuge} ${theme.spacings.xxhuge} 0 0;
  `}
`;

export const LinkToForgot = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.spacings.xsmall};
    font-weight: 700;
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.gray11};
  `}
`;

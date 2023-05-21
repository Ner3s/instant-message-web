import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xhuge};
    flex-grow: 2;
  `};
`;

export const WrapperSpinner = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    align-items: center;
    background-image: ${theme.colors.gradient.vertical};
  `};
`;

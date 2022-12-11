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

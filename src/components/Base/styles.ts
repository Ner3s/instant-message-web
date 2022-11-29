import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-height: 780px) {
    height: 100%;
  }
`;

export const Main = styled.main`
  flex-grow: 2;
`;

export const SpaceBottom = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacings.xhuge};
  `}
`;

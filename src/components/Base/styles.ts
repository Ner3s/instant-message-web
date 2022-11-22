import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    height: calc(100% - ${theme.spacings.xhuge});
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    height: 100%;
    background-image: ${theme.colors.gradient.vertical};
  `}
`;

export const Content = styled.div``;

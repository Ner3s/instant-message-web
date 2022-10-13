import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    height: 100%;
    background-image: ${theme.colors.gradient.vertical};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex-direction: column;
`;

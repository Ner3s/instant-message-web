import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.primary};
    position: relative;
    color: ${theme.colors.white};
    border-radius: ${theme.spacings.small} ${theme.spacings.small}
      ${theme.spacings.small} 0;

    ::after {
      content: ' ';
      position: absolute;
      bottom: -1rem;
      left: -${theme.spacings.xxsmall};
      width: 0;
      height: 0;
      transform: rotate(45deg);
      border-top: ${theme.spacings.small} solid transparent;
      border-bottom: ${theme.spacings.small} solid transparent;
      border-left: ${theme.spacings.small} solid ${theme.colors.primary};
    }
  `};
`;

import styled, { css } from 'styled-components';

interface IInputProps {
  isErrored?: boolean;
  margin?: boolean;
}

export const Container = styled.label<IInputProps>`
  ${({ theme, isErrored, margin }) => css`
    ${isErrored &&
    `border: ${theme.spacings.xxtiny} solid ${theme.colors.error}`}
    display: block;
    width: 100%;
    height: 4.8rem;
    border-radius: 4rem;
    /* padding: 0.8rem; */
    margin: ${!margin ? theme.spacings.small : ''} 0;
    background-color: ${theme.colors.deepWhite};
    /* align-items: center; */

    input {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
    }
  `}
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: ${({ theme }) => theme.spacings.small} 0;
`;

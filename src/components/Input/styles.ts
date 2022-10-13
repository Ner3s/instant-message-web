import styled, { css } from 'styled-components';

interface IInputProps {
  isErrored?: boolean;
  margin?: boolean;
  hasIcon?: boolean;
}

export const Container = styled.label<IInputProps>`
  ${({ theme, isErrored, margin, hasIcon }) => css`
    all: unset;
    ${isErrored &&
    `border: ${theme.spacings.xxtiny} solid ${theme.colors.error}`}
    width: 100%;
    min-width: 100%;
    height: ${theme.spacings.large};
    position: relative;
    display: flex;
    align-items: center;
    border-radius: ${theme.spacings.huge};
    padding: ${hasIcon
      ? `${theme.spacings.xxsmall} ${theme.spacings.xsmall}`
      : theme.spacings.xxsmall};
    margin: ${margin ? theme.spacings.small : 0};
    background-color: ${theme.colors.gray2};

    input {
      height: 100%;
      width: 100%;
      background-color: transparent;
      padding: 0 ${theme.spacings.tiny};
      border: none;
      outline: none;
    }
  `}
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: ${({ theme }) => theme.spacings.small} 0;
`;

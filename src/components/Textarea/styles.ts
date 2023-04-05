import styled, { css } from 'styled-components';

interface IInputProps {
  isErrored?: boolean;
  margin?: boolean;
  txtColor?: string;
}

export const Container = styled.label<IInputProps>`
  ${({ theme, isErrored, margin, txtColor }) => css`
    display: flex;
    width: 100%;
    height: ${theme.spacings.xxhero};
    position: relative;
    align-items: flex-start;
    border-radius: ${theme.spacings.mediumSmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    margin: ${margin ? `${theme.spacings.xsmall} 0` : 0};
    background-color: ${theme.colors.gray2};
    ${isErrored &&
    css`
      border: ${theme.spacings.xtiny} solid ${theme.colors.error};
    `}

    textarea {
      resize: none;
      height: 100%;
      width: 100%;
      background-color: transparent;
      padding: 0 ${theme.spacings.tiny};
      border: none;
      outline: none;
      ${txtColor && `color: ${txtColor}`};
    }

    > svg {
      margin-top: 0.4rem;
    }
  `}
`;

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.spacings.xsmall};
  `}
`;

export const LabelAccessibility = styled.span`
  display: none;
`;

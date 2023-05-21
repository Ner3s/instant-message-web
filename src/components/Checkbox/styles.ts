import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.label<ContainerProps>`
  ${({ theme, isErrored }) => css`
    display: flex;
    align-items: center;
    position: relative;
    background: transparent;
    color: ${isErrored ? 'red' : theme.colors.primary};
    width: 100%;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    input {
      appearance: none;
    }

    span.box {
      border-radius: 0.5rem;
      height: ${theme.spacings.mediumSmall};
      width: ${theme.spacings.mediumSmall};
      background: #fff;
      border: 0.2rem solid ${isErrored ? 'red' : theme.colors.primary};
      display: block;
      position: absolute;
      left: 0;
      top: 2px;
    }

    span.box:after {
      content: '';
      height: ${theme.spacings.mediumSmall};
      width: ${theme.spacings.mediumSmall};
      background: ${({ theme }) => theme.colors.primary};
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 0.3rem;
      transition: 300ms ease-in-out 0s;
    }

    input[type='checkbox']:checked ~ span.box:after {
      transform: translate(-50%, -50%) scale(1);
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.medium};
  `}
`;

export const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.spacings.xsmall};
  `}
`;

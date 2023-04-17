import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: ${theme.spacings.small};
    background-image: ${theme.colors.gradient.vertical};

    @media (min-height: 780px) {
      padding: ${theme.spacings.mediumSmall} ${theme.spacings.small}
        ${theme.spacings.xxhuge} ${theme.spacings.small};
    }
  `}
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacings.small} 0;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes.largeMedium};
    background-color: ${theme.colors.deepWhite};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 ${theme.spacings.large} 0;
    flex-direction: column;
    border-radius: ${theme.spacings.xhuge} ${theme.spacings.xhuge} 0 0;

    animation-name: form-animate;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;

    label {
      margin: ${theme.spacings.xsmall} 0;
    }

    button {
      margin: ${theme.spacings.small} 0;
    }

    a {
      color: ${theme.colors.deepBlack};
      font-size: ${theme.font.sizes.xsmall};
      text-decoration: none;
    }

    @keyframes form-animate {
      0% {
        opacity: 0.3;
        transform: translateY(600px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  `}
`;

export const WrapperFileInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.frameSizes.small};
    margin: 0%;

    .test {
      max-width: ${theme.frameSizes.largeMedium};
      width: auto;
      margin: 0;
      height: ${theme.frameSizes.small};
      border-radius: ${theme.spacings.xhuge} ${theme.spacings.xhuge} 0 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding: ${theme.spacings.small};
      background-color: ${theme.colors.gray7};

      > svg {
        margin: 0 ${theme.spacings.xhuge};
      }

      > span {
        margin: 0 ${theme.spacings.medium};
      }

      img {
        width: 100%;
        height: 100%;
        max-height: ${theme.frameSizes.small};
        border-radius: ${theme.spacings.xhuge} ${theme.spacings.xhuge} 0 0;
      }
    }
  `}
`;

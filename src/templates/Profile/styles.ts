import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    height: auto;
    background-image: ${theme.colors.gradient.vertical};

    @media (min-height: 820px) {
      height: 100%;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const TitlePage = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.deepWhite};
    text-align: center;
    margin: ${theme.spacings.small} 0;
    padding: ${theme.spacings.large} 0;
  `};
`;

export const Form = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes.largeMedium};
    background-color: ${theme.colors.deepWhite};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: ${theme.spacings.large};
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

export const Circle = styled.div`
  ${({ theme }) => css`
    width: ${theme.frameSizes.xsmall};
    height: ${theme.frameSizes.xsmall};
    border-radius: ${theme.spacings.hero};
    background-color: ${theme.colors.gray11};
    margin: -${theme.spacings.xxhero} 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: ${theme.spacings.hero};
    }
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.normal};
    margin: ${theme.spacings.xsmall} 0 0 0;
  `}
`;

export const BirthDate = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray9};
    margin: 0 0 ${theme.spacings.xsmall} 0;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: 0 0 ${theme.spacings.xsmall} 0;
    color: ${theme.colors.gray7};
  `}
`;

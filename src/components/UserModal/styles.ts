import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.deepWhite};
    padding: ${theme.spacings.mediumLarge};
    border-radius: ${theme.spacings.small};
    border-bottom: 5px solid ${theme.colors.primary};
    cursor: pointer;
    transition: transform 200ms ease-in;

    @media (${theme.breakPoints.minS}) {
      border-bottom: 0;
      border-right: 5px solid ${theme.colors.primary};
      flex-direction: row;
    }

    &:hover {
      transform: scale(1.02);
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (${theme.breakPoints.minS}) {
      flex-direction: row;
      justify-content: flex-start;
      width: auto;
    }
  `}
`;

export const ImageProfile = styled.img`
  ${({ theme }) => css`
    width: ${theme.frameSizes.xxsmall};
    height: ${theme.frameSizes.xxsmall};
    object-fit: cover;
    border-radius: ${theme.spacings.hero};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    text-align: center;

    @media (${theme.breakPoints.minS}) {
      text-align: left;
    }
  `}
`;

export const Description = styled.span`
  text-align: center;
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    margin: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (${theme.breakPoints.minS}) {
      margin: 0 0 0 ${theme.spacings.xsmall};
    }
  `}
`;

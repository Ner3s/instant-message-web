import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.deepWhite};
    padding: ${theme.spacings.mediumLarge};
    border-radius: ${theme.spacings.small};

    @media (${theme.breakPoints.minS}) {
      flex-direction: row;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const ProfileAreaClick = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;

    @media (${theme.breakPoints.minS}) {
      flex-direction: row;
      justify-content: flex-start;
      width: auto;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0;

    @media (${theme.breakPoints.minS}) {
      margin: 0 0 0 ${theme.spacings.xsmall};
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

export const Circle = styled.div`
  ${({ theme }) => css`
    width: ${theme.frameSizes.xxsmall};
    height: ${theme.frameSizes.xxsmall};
    border-radius: ${theme.spacings.hero};
    background-color: ${theme.colors.gray11};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const WrapperButtonActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: ${theme.spacings.xsmall} 0 0 0;

    @media (${theme.breakPoints.minS}) {
      width: auto;
      flex-direction: row;
      margin: 0;
    }
  `}
`;

export const ButtonAction = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: ${theme.spacings.tiny};
    display: flex;
    justify-content: center;

    & > span {
      margin: 0 0 0 ${theme.spacings.xxsmall};
    }

    @media (${theme.breakPoints.minS}) {
      flex-direction: column;
      align-items: center;
      margin: ${theme.spacings.xsmall};

      & > span {
        margin: 0;
      }
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    cursor: pointer;

    // Animation left to right
    background: ${theme.colors.deepWhite};
    background: linear-gradient(
        to left,
        ${theme.colors.deepWhite} 50%,
        ${theme.colors.gray1} 50%
      )
      right;
    background-size: 200%;
    transition: 0.5s ease-out;
    &:hover {
      background-position: left;
    }

    border-top: 1px solid ${theme.colors.gray1};

    :last-of-type {
      border-bottom: 1px solid ${theme.colors.gray1};
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
    width: ${theme.spacings.hero};
    height: ${theme.spacings.hero};
    object-fit: cover;
    border-radius: ${theme.spacings.hero};
  `}
`;

export const Title = styled.h4`
  margin: 0;
  text-transform: capitalize;
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.hero};
    height: ${theme.spacings.hero};
    border-radius: ${theme.spacings.hero};
    background-color: ${theme.colors.gray11};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Description = styled.span`
  text-align: center;
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${theme.spacings.xsmall};

    @media (${theme.breakPoints.minS}) {
      margin: 0 0 0 ${theme.spacings.xsmall};

      & span {
        text-align: left;
      }
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.deepWhite};
    padding: ${theme.spacings.mediumLarge};
    border-radius: ${theme.spacings.small};
    cursor: pointer;
    transition: transform 200ms ease-in;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

export const Description = styled.span`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  height: 13rem;
  overflow: hidden;
`;

export const WrapperText = styled.div`
  margin: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StartDate = styled.span`
  text-align: center;
`;

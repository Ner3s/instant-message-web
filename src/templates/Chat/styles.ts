import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  `};
`;

export const Main = styled.main`
  ${({ theme }) => css`
    flex-grow: 2;
    padding: ${theme.spacings.xhero} ${theme.spacings.small};
  `};
`;

export const NavBarUser = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    height: ${theme.spacings.xhero};
    position: fixed;
    background-image: ${theme.colors.gradient.horizontal};
    z-index: ${theme.layers.layer1};
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${theme.spacings.small};
    height: ${theme.spacings.xhero};
    background-color: ${theme.colors.deepWhite};

    > button {
      margin: -${theme.spacings.xxsmall};
      width: ${theme.spacings.huge};
      height: ${theme.spacings.huge};
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        transform: rotate(42deg);
        font-size: ${theme.font.sizes.normal};
      }
    }
  `};
`;

export const ImageProfile = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxhuge};
    height: ${theme.spacings.xxhuge};
    object-fit: cover;
    border-radius: ${theme.spacings.xxhuge};
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.xxhuge};
    height: ${theme.spacings.xxhuge};
    border-radius: ${theme.spacings.xxhuge};
    background-color: ${theme.colors.gray11};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const WrapperArrowAndImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-out;

    > svg {
      margin-right: ${theme.spacings.xsmall};
    }

    :hover {
      opacity: 0.7;
      background-color: ${theme.colors.gray1};
      border-radius: ${theme.spacings.xxhero};
    }
  `}
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    color: ${theme.colors.deepWhite};
    text-transform: Capitalize;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.normal};
    cursor: pointer;
  `}
`;

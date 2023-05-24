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
    border-radius: ${theme.spacings.xhuge};

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

export const WrapperCoverFileInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.frameSizes.small};
    margin: 0%;

    .cover {
      max-width: ${theme.frameSizes.largeMedium};
      width: auto;
      margin: 0;
      height: ${theme.frameSizes.small};
      border-radius: ${theme.spacings.xhuge} ${theme.spacings.xhuge} 0 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      background-color: ${theme.colors.gray7};

      > svg {
        margin: 0 ${theme.spacings.xhuge};
      }

      > span {
        margin: 0 ${theme.spacings.medium} ${theme.spacings.mediumSmall} 0;
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

export const WrapperProfileFileInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: -${theme.spacings.xxhuge};
    display: flex;
    justify-content: center;
  `}
`;

export const WrapperInputs = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 ${theme.spacings.mediumSmall};
  `}
`;

export const Label = styled.span`
  align-self: flex-start;
  padding-left: ${({ theme }) => theme.spacings.small};
`;

export const WrapperTitle = styled.span`
  ${({ theme }) => css`
    display: flex;
    padding-left: ${theme.spacings.small};
    align-items: center;
  `};
`;

export const WrapperStatus = styled.span`
  ${({ theme }) => css`
    display: flex;
    padding-left: ${theme.spacings.small};
    align-items: center;
    position: relative;

    > svg {
      margin: 0 ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
      cursor: pointer;
    }

    ${TooltipWrapper} {
      visibility: hidden;
      opacity: 0;
      transition: all 300ms ease-in-out;
    }

    > svg:hover ~ ${TooltipWrapper} {
      visibility: visible;
      opacity: 1;
    }
  `};
`;

export const TooltipWrapper = styled.div`
  ${({ theme }) => css`
    height: 27.4rem;
    left: 12rem;
    position: absolute;
    top: -21rem;
    width: 12.8rem;

    @media (min-width: 450px) {
      height: 12.4rem;
      left: 12rem;
      top: -8.5rem;
      width: 25.8rem;
    }

    @media ${theme.breakPoints.minS} {
      height: ${theme.spacings.xsmall};
      left: 12rem;
      top: -6rem;
      width: ${theme.frameSizes.medium};
    }
  `};
`;

export const WrapperMembers = styled.div`
  display: flex;
  flex-direction: column;

  :first-child {
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`;

export const DGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.small} 0 0 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 0;

    @media (min-width: 410px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${theme.breakPoints.minS} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const Name = styled.span<{ owner?: boolean }>`
  ${({ theme, owner }) => css`
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: ${owner ? '100%' : theme.spacings.xhero};
    overflow: hidden;
    text-transform: capitalize;

    @media ${theme.breakPoints.minS} {
      max-width: ${owner ? '100%' : theme.frameSizes.xsmall};
    }
  `}
`;

export const WrapperMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const RemoveMemberButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    top: -${theme.spacings.small};
    right: ${theme.spacings.xxsmall};
    border: none;
    background-color: ${theme.colors.gray9};
    color: ${theme.colors.white};
    padding: ${theme.spacings.tiny};
    border-radius: ${theme.spacings.xhuge};
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    :hover {
      opacity: 0.8;
    }
  `};
`;

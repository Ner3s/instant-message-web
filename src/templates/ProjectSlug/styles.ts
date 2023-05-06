import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    background-image: ${theme.colors.gradient.vertical};

    @media (min-height: 780px) {
      padding: ${theme.spacings.mediumSmall} ${theme.spacings.small}
        ${theme.spacings.xxhuge} ${theme.spacings.small};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes.largeMedium};
    background-color: ${theme.colors.deepWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 ${theme.spacings.large} 0;
    flex-direction: column;
    border-radius: ${theme.spacings.xhuge};

    animation-name: animate;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;

    @keyframes animate {
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

export const WrapperInnerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    width: 100%;

    hr {
      background-color: ${theme.colors.gray3};
      border: none;
      height: 0.1rem;
    }
  `}
`;

export const Cover = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.frameSizes.largeMedium};
    width: 100%;
    margin: 0;
    height: ${theme.frameSizes.small};
    border-radius: ${theme.spacings.xhuge} ${theme.spacings.xhuge} 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: ${theme.colors.secondary};
  `}
`;

export const WrapperProfile = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: -${theme.spacings.hero};
  `}
`;

export const WrapperTitleAndStartDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
  `};
`;

export const StartDate = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `};
`;

export const Description = styled.span`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.tiny} 0 ${theme.spacings.xsmall} 0;
    font-size: ${theme.font.sizes.small};
  `};
`;

export const WrapperUserSection = styled.section`
  margin: ${({ theme }) => theme.spacings.small} 0;
  display: flex;
  flex-direction: column;
`;

export const WrapperOwnerAndMember = styled.div`
  display: flex;
  flex-direction: column;

  :first-child {
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }
`;
export const DFlex = styled.div`
  display: flex;
`;
export const WrapperCommonUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 0;
    @media ${theme.breakPoints.minS} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const TitleSection = styled.h3``;

export const Name = styled.span<{ owner?: boolean }>`
  ${({ theme, owner }) => css`
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: ${owner ? '100%' : theme.spacings.xhero};
    overflow: hidden;

    @media ${theme.breakPoints.minS} {
      max-width: ${owner ? '100%' : theme.frameSizes.xsmall};
    }
  `}
`;

export const WrapperButtons = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

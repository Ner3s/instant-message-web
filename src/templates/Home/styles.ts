import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: ${theme.spacings.mediumSmall};
    background-image: ${theme.colors.gradient.vertical};

    @media (min-height: 780px) {
      padding: ${theme.spacings.mediumSmall} ${theme.spacings.mediumSmall}
        ${theme.spacings.xxhuge} ${theme.spacings.mediumSmall};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.deepWhite};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.deepWhite};
    margin: ${theme.spacings.xxsmall} 0 0 0;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.deepWhite};
    padding: ${theme.spacings.mediumLarge};
    border-radius: ${theme.spacings.small};
    margin-top: ${theme.spacings.mediumLarge};
  `}
`;

export const Content = styled.section``;

export const WrapperSpinner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.deepWhite};
    border-radius: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small};
    margin: ${theme.spacings.mediumSmall} 0;
    border-bottom: ${theme.spacings.tiny} solid ${theme.colors.primary};
  `}
`;

export const WrapperUsers = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;

export const NoUsers = styled.div``;

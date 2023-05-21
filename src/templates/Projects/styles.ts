import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
    background-image: ${theme.colors.gradient.vertical};

    @media ${theme.breakPoints.minM} {
      padding: ${theme.spacings.mediumSmall} ${theme.spacings.small}
        ${theme.spacings.xxhuge} ${theme.spacings.small};
    }
  `}
`;

export const InnerContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.frameSizes.max};
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors.deepWhite};
  }

  button {
    width: ${({ theme }) => theme.frameSizes.xsmall};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Filter = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.deepWhite};
    border-radius: ${theme.spacings.small};
    margin: ${theme.spacings.small} 0;

    hr {
      border: 1px solid ${theme.colors.gray2};
    }
  `};
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) =>
    theme.spacings.mediumSmall + ' ' + theme.spacings.medium};
`;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const RadioButton = styled.label`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    height: ${theme.spacings.huge};

    :first-child {
      span {
        border-radius: 0 0 0 ${theme.spacings.small};
      }
    }
    :last-child {
      span {
        border-radius: 0 0 ${theme.spacings.small} 0;
      }
    }

    input {
      appearance: none;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    span:hover {
      color: ${theme.colors.secondary};
      border-bottom: 2px solid ${theme.colors.secondary};
    }

    input[type='radio']:checked ~ span {
      color: ${theme.colors.primary};
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `};
`;

export const WrapperProjects = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.small};

    @media ${theme.breakPoints.minS} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.breakPoints.minL} {
      grid-template-columns: repeat(3, 1fr);
    }
  `};
`;

export const WrapperSpinner = styled.div`
  margin-top: ${({ theme }) => theme.spacings.small};
`;

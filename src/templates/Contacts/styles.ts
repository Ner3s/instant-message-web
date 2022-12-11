import styled, { css } from 'styled-components';

export const Container = styled.div`
  user-select: none;
`;

export const Navbar = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacings.xhuge};
    background-image: ${theme.colors.gradient.horizontal};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.deepWhite};
  `};
`;

export const Form = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
  `}
`;

export const ContactsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    /* gap: ${theme.spacings.xsmall}; */
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `};
`;

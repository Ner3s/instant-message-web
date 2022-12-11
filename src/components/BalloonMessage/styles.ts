import styled, { css } from 'styled-components';

interface BallonMessage {
  side: 'RIGHT' | 'LEFT';
}

export const Container = styled.div<BallonMessage>`
  ${({ theme, side }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
    background-color: ${side === 'RIGHT'
      ? theme.colors.secondary
      : theme.colors.gray1};
    position: relative;
    border-radius: ${theme.spacings.small};
    margin: ${side === 'RIGHT'
      ? `${theme.spacings.small} ${theme.spacings.small} ${theme.spacings.small} ${theme.spacings.mediumLarge}`
      : `${theme.spacings.small} ${theme.spacings.mediumLarge} ${theme.spacings.small}  ${theme.spacings.small}`};

    ::after {
      content: ' ';
      position: absolute;
      top: -${theme.spacings.xxsmall};

      ${side === 'RIGHT'
        ? `right: -${theme.spacings.xxsmall}`
        : `left: -${theme.spacings.xxsmall}`};
      width: 0;
      height: 0;
      transform: rotate(90deg);
      border-top: ${theme.spacings.small} solid transparent;
      border-bottom: ${theme.spacings.small} solid transparent;
      border-left: ${theme.spacings.small} solid
        ${side === 'RIGHT' ? theme.colors.secondary : theme.colors.gray1};
    }
  `};
`;

export const Datetime = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`;

import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 35px;
  font-size: 20px;
  font-size: clamp(16px, 1vw, 20px);
  border-radius: 50px;
  cursor: pointer;
  min-width: 200px;
  transition: all 0.3s;

  ${({ primary }) =>
    primary &&
    css`
      border: 2px solid var(--yellow);
      background-color: var(--yellow);

      &:hover {
        background-color: var(--white);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 2px solid var(--yellow);
      background-color: #ffffff;

      &:hover {
        background-color: var(--yellow);
      }
    `}

    ${({ tertiary }) =>
    tertiary &&
    css`
      border: 2px solid #ffffff;
      background-color: #ffffff;
    `}
`;

export default function Button({
  children,
  primary = true,
  secondary,
  tertiary,
  fontsize,
}) {
  return (
    <StyledButton
      className="button"
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      fontsize={fontsize}>
      {children}
    </StyledButton>
  );
}

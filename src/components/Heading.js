import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 42px;
  font-size: clamp(24px, 15vw, 42px);
  font-weight: var(--extraBold);
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
`;

export default function Heading({ children }) {
  return <StyledH2>{children}</StyledH2>;
}

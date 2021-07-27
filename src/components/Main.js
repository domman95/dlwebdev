import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  /* padding: 0 20px; */
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

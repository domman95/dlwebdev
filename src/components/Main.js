import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  /* padding: 0 20px; */
  padding: 20px 0 0;
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

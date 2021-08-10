import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 20px 0 0;
  min-height: calc(100vh - 116px);
`;

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  box-sizing: border-box;
  position: relative;
  display: grid;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  overflow: hidden;
  z-index: 100;
`;

export default function Section({ children, id }) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

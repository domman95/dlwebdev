import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: grid;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  /* border: 10px solid blue; */
`;

export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

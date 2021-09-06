import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 42px;
  font-size: clamp(20px, 10vw, 42px);
  font-weight: var(--extraBold);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  white-space: nowrap;
  z-index: 10;

  span {
    display: inline-block;
    transition: transform 0.3s;
    cursor: default;

    &:hover {
      transform: scale(1.15) skewX(-5deg);
    }
  }
`;

const StyledShadow = styled.h4`
  position: relative;
  position: absolute;
  top: 0;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, 0%);
  font-size: 100px;
  font-size: clamp(80px, 10vw, 100px);
  font-weight: var(--extraBold);
  text-transform: uppercase;
  color: var(--white);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: -1;
`;

export default function Heading({ children, shadow = false }) {
  const [text, setText] = useState([]);
  useEffect(() => {
    setText(children.split(''));
  }, [children]);
  return (
    <div>
      {shadow && <StyledShadow>{children}</StyledShadow>}
      <StyledH2>
        {text.map((letter, i) => {
          if (letter === ' ') {
            return <span key={i}>{String.fromCharCode(160)}</span>;
          } else {
            return <span key={i}>{letter}</span>;
          }
        })}
      </StyledH2>
    </div>
  );
}

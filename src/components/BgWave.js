import React from 'react';
import styled from 'styled-components';
import waveUp from '../assets/wave-up.svg';
import waveDown from '../assets/wave-down.svg';

const Container = styled.div`
  position: relative;
  margin: 100px 0;
  padding: 30px 0;
  background-color: var(--yellow);

  .wave {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 54px;
    mask-size: 54px;
    mask-repeat: repeat-x;
    background-color: var(--yellow);

    &.wave-up {
      top: calc(-45px);
      mask: url('${waveUp}');
    }

    &.wave-down {
      bottom: calc(-45px);
      mask: url('${waveDown}');
    }
  }
`;

export default function BgWave({ children }) {
  return (
    <Container>
      <div className="wave wave-up"></div>
      {children}
      <div className="wave wave-down"></div>
    </Container>
  );
}

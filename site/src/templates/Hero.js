import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo';
import Button from '../components/Button';
import Socials from '../components/Socials';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  height: 95vh;

  .wrapper {
    display: grid;
    justify-items: center;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    gap: 40px;
    z-index: 10;
  }

  #logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    width: 90%;

    svg {
      width: 100%;
    }
  }

  .socials {
  }

  h1 {
    text-align: center;
    font-weight: var(--medium);
    font-size: 26px;
    font-size: clamp(18px, 15vw, 26px);
  }
`;

export default function Hero() {
  return (
    <StyledHeader id="strona-glowna" className="navSection">
      <div className="wrapper">
        <Socials />
        <div id="logo">
          <Logo />
        </div>
        <h1>Strony i aplikacje internetowe</h1>
        <a href="#oferta">
          <Button primary>sprawdź ofertę</Button>
        </a>
      </div>
    </StyledHeader>
  );
}

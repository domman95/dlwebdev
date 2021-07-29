import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import gatsby from '../assets/gatsby.jpg';
import netlify from '../assets/netlify.jpg';
import hasura from '../assets/hasura.jpg';
import datocms from '../assets/datoCMS.jpg';
import figma from '../assets/figma.jpg';
import graphql from '../assets/graphql.jpg';
import waveUp from '../assets/wave-up.svg';
import waveDown from '../assets/wave-down.svg';

const Background = styled.div`
  position: relative;
  margin: 100px 0;
  padding: 30px 0;
  background-color: var(--yellow);
  /* TODO: wave svg on top and bottom */

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

  section {
    gap: 20 px;
  }

  .content {
    text-align: left;
    font-weight: var(--medium);
    font-size: 16px;

    @media (min-width: 768px) {
      padding: 0 100px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 200px;
    width: 100%;
    gap: 30px;
    z-index: 10;
  }

  .servicesCard {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      transform: scale(1.01);
    }
  }
`;

export default function HowWork() {
  return (
    <Background>
      <div className="wave wave-up"></div>
      <Section>
        <Heading>Jak pracuję?</Heading>
        <p className="content">
          W swoich projektach wykorzystuję narzędzia i frameworki, które
          usprawniają pracę i oferują to co najważniejsze zarówno dla
          developerów jak i klientów
        </p>
        <div className="wrapper">
          <div className="servicesCard">
            <img src={gatsby} alt="" />
          </div>
          <div className="servicesCard">
            <img src={netlify} alt="" />
          </div>
          <div className="servicesCard">
            <img src={hasura} alt="" />
          </div>
          <div className="servicesCard">
            <img src={datocms} alt="" />
          </div>
          <div className="servicesCard">
            <img src={figma} alt="" />
          </div>
          <div className="servicesCard">
            <img src={graphql} alt="" />
          </div>
        </div>
      </Section>
      <div className="wave wave-down"></div>
    </Background>
  );
}

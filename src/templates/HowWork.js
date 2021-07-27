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

const Background = styled.div`
  background-color: var(--yellow);
  padding: 60px 0;
  margin: 60px 0;
  /* TODO: wave svg on top and bottom */

  section {
    gap: 20px;
  }

  .content {
    text-align: center;
    font-weight: var(--medium);
    font-size: 16px;

    @media (min-width: 768px) {
      padding: 0 100px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 200px;
    width: 100%;
    gap: 30px;
  }

  .servicesCard {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
  }
`;

export default function HowWork() {
  return (
    <Background>
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
    </Background>
  );
}

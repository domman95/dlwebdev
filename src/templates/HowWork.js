import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Heading from '../components/Heading';
import Section from '../components/Section';
import BgWave from '../components/BgWave';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 200px;
  width: 100%;
  gap: 30px;
  z-index: 10;

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

const Content = styled.p`
  text-align: left;
  font-weight: var(--medium);
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 0 100px;
  }
`;

export default function HowWork() {
  const { allSanityStack } = useStaticQuery(graphql`
    query {
      allSanityStack {
        edges {
          node {
            id
            title
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  const data = allSanityStack.edges;

  return (
    <BgWave>
      <Section id="jak-pracuje">
        <Heading>Jak pracuję?</Heading>
        <Content>
          W swoich projektach wykorzystuję narzędzia i frameworki, które
          usprawniają pracę i oferują to co najważniejsze zarówno dla
          developerów jak i klientów
        </Content>
        <Wrapper>
          {data.map(({ node: { id, title, image } }) => (
            <div className="servicesCard" key={id}>
              <img src={image.asset.url} alt={title} />
            </div>
          ))}
        </Wrapper>
      </Section>
    </BgWave>
  );
}

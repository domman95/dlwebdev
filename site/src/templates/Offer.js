import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from '../components/Button';
import Heading from '../components/Heading';
import OfferCard from '../components/OfferCard';
import Section from '../components/Section';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 480px;
  justify-items: center;
  width: 100%;
  gap: 40px;
  margin: 40px 0;
  z-index: 10;
`;

export default function Offer() {
  const { allSanityOffer } = useStaticQuery(graphql`
    query {
      allSanityOffer {
        edges {
          node {
            id
            slug {
              current
            }
            title
            description
          }
        }
      }
    }
  `);

  const data = allSanityOffer.edges;

  return (
    <Section id="oferta">
      <Heading shadow>Oferta</Heading>
      <Wrapper>
        {data.map(({ node: { id, slug, title, description } }) => (
          <OfferCard
            key={id}
            title={title}
            description={description}
            slug={slug}
          />
        ))}
      </Wrapper>
      <Link to="#kontakt">
        <Button>skontakuj się</Button>
      </Link>
    </Section>
  );
}

import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import { graphql, useStaticQuery } from 'gatsby';
import Project from '../components/Project';

const Wrapper = styled.div`
  width: 100%;
  column-count: 1;
  column-gap: 20px;
  margin: 60px 0;

  @media (min-width: 630px) {
    column-count: 2;
  }

  @media (min-width: 1070px) {
    column-count: 3;
  }
`;

export default function Portfolio() {
  const { allSanityPortfolio } = useStaticQuery(graphql`
    query {
      allSanityPortfolio {
        edges {
          node {
            id
            title
            description
            hashtags
            slug {
              current
            }
            images {
              asset {
                url
              }
            }
            stack {
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
    }
  `);

  const data = allSanityPortfolio.edges;

  return (
    <Section id="portfolio">
      <Heading shadow>portfolio</Heading>
      <Wrapper>
        {data.map(
          ({ node: { id, title, description, images, hashtags, slug } }) => (
            <Project
              key={id}
              title={title}
              description={description}
              image={images[0].asset.url}
              hashtags={hashtags}
              slug={slug.current}
            />
          )
        )}
      </Wrapper>
    </Section>
  );
}

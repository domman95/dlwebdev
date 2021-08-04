import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Wrapper = styled.div`
  h1 {
    margin-bottom: 20px;
  }
`;

export default function Portfolio({ location }) {
  return (
    <Layout location={location}>
      <Section>
        <Wrapper>
          <h1>Strona w trakcie przygotowania!</h1>
        </Wrapper>
        <Link to="/">
          <Button primary>powrót</Button>
        </Link>
      </Section>
    </Layout>
  );
}

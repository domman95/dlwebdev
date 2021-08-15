import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Wrapper = styled.div`
  .error {
    font-size: 22px;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export default function FourOhhFour({ location }) {
  return (
    <Layout location={location}>
      <Section>
        <Wrapper>
          <p className="error">Błąd 404</p>
          <h1>Upss! Nie znaleziono strony {location.href}</h1>
        </Wrapper>
        <Link to="/">
          <Button>powrót</Button>
        </Link>
      </Section>
    </Layout>
  );
}

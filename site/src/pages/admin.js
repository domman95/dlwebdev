import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--black);
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function Admin({ location }) {
  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (!isBrowser) return null;
    if (isBrowser) {
      navigate('https://dlwebdev.sanity.studio/desk', { replace: true });
    }
  }, [isBrowser]);

  return (
    <Layout location={location}>
      <Container>
        <h2>Jesteś przenoszony na stronę swojego dostawcy treści!</h2>
      </Container>
    </Layout>
  );
}

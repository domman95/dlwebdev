import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Hero from '../templates/Hero';
import HowWork from '../templates/HowWork';
import Offer from '../templates/Offer';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Offer />
        <HowWork />
      </Main>
    </Layout>
  );
}

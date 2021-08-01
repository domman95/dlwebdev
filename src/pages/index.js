import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import About from '../templates/About';
import Contact from '../templates/Contact';
import Footer from '../templates/Footer';
import Hero from '../templates/Hero';
import HowWork from '../templates/HowWork';
import Offer from '../templates/Offer';
import Portfolio from '../templates/Portfolio';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Offer />
        <HowWork />
        <About />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </Layout>
  );
}

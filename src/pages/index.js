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

export default function HomePage({ location }) {
  useEffect(() => {
    const sections = document.querySelectorAll('.navSection');

    function elementInViewport(el) {
      const id = el.id;
      let top = el.offsetTop;
      const height =
        el.offsetHeight > 2000 ? el.offsetHeight / 4 : el.offsetHeight;

      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
      }

      if (
        top >= window.pageYOffset &&
        top + height <= window.pageYOffset + window.innerHeight
      ) {
        const hash = `#${id}`;
        window.history.pushState(null, null, hash);
        return id;
      }
    }
    const scrollControl = () => {
      sections.forEach((section) => {
        elementInViewport(section);
      });
    };

    window.addEventListener('scroll', scrollControl);

    return () => {
      window.removeEventListener('scroll', scrollControl);
    };
  }, []);
  return (
    <Layout location={location}>
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

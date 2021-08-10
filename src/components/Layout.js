import React from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import SEO from './SEO';
import Nav from './Nav';
import Footer from '../templates/Footer';

export default function Layout({ children, location }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Nav location={location} />
      {children}
      <Footer />
    </>
  );
}

import React from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import SEO from './SEO';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}

import React from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';
import SEO from './SEO';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  );
}

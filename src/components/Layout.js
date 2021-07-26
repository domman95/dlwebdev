import React from 'react';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyle';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

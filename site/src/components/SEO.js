import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../assets/favicon.ico';

export default function SEO() {
  return (
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
        rel="stylesheet"></link>
    </Helmet>
  );
}

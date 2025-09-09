import React from 'react';

import { Header } from '../layouts/Header/Header';
import { Footer } from '../layouts/Footer/Footer';

export const HomePage: React.FC = ({}) => {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
    <Footer />
  </>
  );
};

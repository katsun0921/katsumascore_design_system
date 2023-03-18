import React from 'react';
import { Link } from '../../components/Link/Link';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';

export const Navigation = ({}) => {
  return (
    <div className="l-navigation">
      <nav>
        <div className="menu-category-container">
          <Link />
        </div>
      </nav>
    </div>
  );
};

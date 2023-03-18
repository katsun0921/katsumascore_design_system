import React from 'react';
import { Link } from '../../components/Link/Link';
import { HamburgerMenu } from '../../components/Icon/Icon';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/utility/index.scss';

export const Navigation = ({}) => {
  return (
    <div className="l-navigation">
      <div className="l-navigation__menuButton u-flex u-justify-center u-items-center u-gap-x-4">
        <HamburgerMenu />
        <span>MENU</span>
      </div>
      <nav id="js-mobile-menu" className="l-navigation__list u-hidden">
        <Link />
      </nav>
    </div>
  );
};

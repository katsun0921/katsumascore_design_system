import React from 'react';
import { LinkHeader } from '../../components/Link/Link';
import { HamburgerMenu } from '../../components/HamburgerMenu/HamburgerMenu';
import { changeClassWhenResizeOnNavigation } from '../../../ts/navigation/';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/utility/index.scss';

export const Navigation = ({}) => {
  window.addEventListener('load', () => {
    changeClassWhenResizeOnNavigation();
  });
  window.addEventListener('resize', () => changeClassWhenResizeOnNavigation());
  return (
    <div className='l-navigation l-navigation--isDesktop'>
      <div className='l-navigation__menuButton u-flex u-justify-center u-items-center u-gap-x-4'>
        <HamburgerMenu label='MENU' />
      </div>
      <nav id='js-mobile-menu' className='l-navigation__list u-opacity-0'>
        <LinkHeader />
      </nav>
    </div>
  );
};

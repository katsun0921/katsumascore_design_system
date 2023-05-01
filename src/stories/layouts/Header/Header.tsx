import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_header.scss';
import '@/scss/object/utility/index.scss';
import logoPrimary from '@/assets/images/logo-primary.png';
import { Search } from '../../components/Search/Search';
import { Navigation } from '../Navigation/Navigation';
import { ListSocialIcon } from '../../components/List/ListSocialIcon';

export const Header = ({}) => {
  return (
    <header id='masthead-pro'>
      <div className='l-header'>
        <div className='l-header__logo'>
          <h1
            id='logo-pro'
            className='u-m-0 u-py-3 u-w-28 u-leading-none logo-inside-nav-pro noselect'
          >
            <a href='/' rel='home'>
              <img src={logoPrimary} alt='' className='u-w-24' width='100' />
            </a>
          </h1>
        </div>
        <div className='l-header__search'>
          <Search />
        </div>
        <div className='l-header__snsLinks'>
          <ListSocialIcon />
        </div>
      </div>
      <Navigation />
    </header>
  );
};

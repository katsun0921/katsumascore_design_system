import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_header.scss';
import '@/scss/object/utility/index.scss';
import logoPrimary from '@/assets/images/logo-primary.png';
import logoFacebook from '@/assets/images/logo-facebook.png';
import logoRss from '@/assets/images/logo-rss.png';
import logoTwitterCircle from '@/assets/images/logo-twitter-blue-circle.png';
import { Search } from '../../components/Search/Search';

export const Header = ({}) => {
  const snsLinks = [logoRss, logoFacebook, logoTwitterCircle];
  return (
    <header id="masthead-pro" className="l-header">
      <div className="l-header__logo">
        <h1
          id="logo-pro"
          className="u-m-0 u-py-3 u-w-28 u-leading-none logo-inside-nav-pro noselect"
        >
          <a href="/" rel="home">
            <img src={logoPrimary} alt="" className="u-w-24" width="100" />
          </a>
        </h1>
      </div>
      <div className="l-header__search">{<Search />}</div>
      <div className="l-header__snsLinks">
        <ul className="u-flex justify-between u-gap-x-5">
          {snsLinks.map((link, i) => (
            <li key={i}>
              <a href="" target="_blank" className="c-icon">
                <img src={link} alt="" className="" width="48" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

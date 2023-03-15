import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_header.scss';

export const Header = () => (
  <header id="masthead-pro" className="l-header">
    <div className="progression-studios-logo-container u-z-50">
      <div className="l-header__logo">
        <h1
          id="logo-pro"
          className="u-m-0 u-py-3 u-w-28 u-leading-none logo-inside-nav-pro noselect"
        >
          <a href="/" rel="home">
            <img
              src=""
              alt=""
              className="progression-studios-default-logo progression-studios-hide-mobile-custom-logo<?php if (get_theme_mod('progression_studios_sticky_logo')) : ?> progression-studios-default-logo-hide<?php endif; ?>"
              width="120"
            />
          </a>
        </h1>
      </div>
      <div></div>
      <div>
        <ul className="u-flex justify-between u-gap-x-5">
          <li>
            <a
              href="<?php echo esc_url(get_theme_mod('progression_studios_header_rss')); ?>"
              target="_blank"
              className="c-icon c-icon__header"
            ></a>
          </li>
          <li>
            <a
              href="<?php echo esc_url(get_theme_mod('progression_studios_header_twitter')); ?>"
              target="_blank"
              className="c-icon c-icon__header"
              title="<?php echo esc_html__( 'Twitter', 'progression-elements-ratency' ); ?>"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

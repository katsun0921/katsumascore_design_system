import React from 'react';
import type { ReactNode } from 'react';
import { clickHamburgerMenu } from '../../../ts/hamburger-menu/hamburger-menu';
import '@/scss/object/component/_icon.scss';
import logoPrimary from '@/assets/images/logo-primary.png';
import logoFacebook from '@/assets/images/logo-facebook.png';
import logoRss from '@/assets/images/logo-rss.png';
import logoTwitterCircle from '@/assets/images/logo-twitter-blue-circle.png';

type TIconProps = {
  template: string;
  children: ReactNode;
  type: string;
  elmMenu: string;
};

type TIconImageProps = {
  props: TIconProps;
  className?: string;
};

export const Icon = ({ template, children }: TIconProps) => {
  let backgroundColor = '';

  switch (template) {
    case 'header':
      backgroundColor = 'rgb(30, 2, 61)';
      break;
    default:
      backgroundColor = 'rgb(255, 255, 255)';
      break;
  }

  return (
    <div
      style={{
        backgroundColor,
        padding: '20px',
      }}
    >
      {children}
    </div>
  );
};

export const IconImage = ({ className, props }: TIconImageProps) => {
  const { type } = props;
  const elementClassName = className ? `c-icon ${className}` : 'c-icon';
  let logoFile = '';

  switch (type) {
    case 'primary':
      logoFile = logoPrimary;
      break;
    case 'facebook':
      logoFile = logoFacebook;
      break;
    case 'rss':
      logoFile = logoRss;
      break;
    case 'twitter-blue-circle':
      logoFile = logoTwitterCircle;
      break;
  }

  return (
    <a className={elementClassName} href="" target="_blank">
      <img src={logoFile} alt="" width="30" />
    </a>
  );
};

export const HamburgerMenu = ({}) => {
  return (
    <button
      type="button"
      id="js-menu-button"
      className="c-icon__hamburgerMenu"
      onClick={() => clickHamburgerMenu()}
    >
      <span className="c-icon__hamburgerMenuLine"></span>
      <span className="c-icon__hamburgerMenuLine"></span>
      <span className="c-icon__hamburgerMenuLine"></span>
    </button>
  );
};

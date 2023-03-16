import React from 'react';
import '@/scss/object/component/_icon.scss';
import logoFacebook from '@/assets/images/logo-facebook.png';
import logoRss from '@/assets/images/logo-rss.png';
import logoTwitterCircle from '@/assets/images/logo-twitter-blue-circle.png';

type IconProps = {
  type: string;
  className?: string;
  template?: string;
};

export const Icon = ({ type, className, template }: IconProps) => {
  const elementClassName = className ? `c-icon ${className}` : 'c-icon';
  let backgroundColor = '';
  let logoFile = '';

  switch (template) {
    case 'header':
      backgroundColor = 'rgb(30, 2, 61)';
      break;
    default:
      backgroundColor = 'rgb(255, 255, 255)';
      break;
  }

  switch (type) {
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
    <div
      style={{
        backgroundColor,
        padding: '20px',
      }}
    >
      <a className={elementClassName} href="" target="_blank">
        <img src={logoFile} alt="" />
      </a>
    </div>
  );
};

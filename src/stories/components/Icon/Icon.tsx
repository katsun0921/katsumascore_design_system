import React from 'react';
import { IconTwitter, IconRss } from './SvgIcons';
import '@/scss/object/component/_icon.scss';

type IconProps = {
  type: string;
  className?: string;
  template?: string;
};

export const Icon = ({ type, className, template }: IconProps) => {
  const elementClassName = className ? `c-icon ${className}` : 'c-icon';
  let backgroundColor = '';

  switch (template) {
    case 'header':
      backgroundColor = 'rgb(30, 2, 61)';
      break;
    default:
      backgroundColor = 'rgb(255, 255, 255)';
      break;
  }

  const iconView = () => {
    switch (type) {
      case 'twitter':
        return (
          <>
            <IconTwitter />
          </>
        );
      case 'rss':
        return (
          <>
            <IconRss />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      style={{
        backgroundColor,
        padding: '20px',
      }}
    >
      <a className={elementClassName} href="" target="_blank">
        {iconView()}
      </a>
    </div>
  );
};

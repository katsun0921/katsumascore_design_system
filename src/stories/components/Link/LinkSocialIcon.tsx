import React from 'react';
import type { ReactNode } from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/component/_link.scss';
import '@/scss/object/utility/index.scss';

type TLinkSocialProps = {
  backgroundColor?: string;
  children: ReactNode;
};

export const LinkSocialIcon = ({
  children,
  backgroundColor,
}: TLinkSocialProps) => {
  return <div style={{ backgroundColor }}>{children}</div>;
};

export const LinkFacebookIcon = ({}) => {
  return (
    <a
      href='https://www.facebook.com/people/Katsumascore/100072246676709/'
      target='_blank'
      className='c-icon__circle'
    >
      <img
        src='https://katsumascore.blog/images/logo-facebook.png'
        alt='facebook'
        width={50}
        height={50}
        className='u-block'
      />
    </a>
  );
};

export const LinkTwitterIcon = ({}) => {
  return (
    <a
      href='https://twitter.com/Katsun0921'
      target='_blank'
      className='c-icon__circle'
    >
      <img
        src='https://katsumascore.blog/images/logo-twitter-blue-circle.png'
        alt='twitter'
        width={50}
        height={50}
        className='u-block'
      />
    </a>
  );
};

export const LinkRssIcon = ({}) => {
  return (
    <a
      href='https://katsumascore.blog/feed/'
      className='c-icon__rss c-icon__circle'
      target='_blank'
    >
      <img
        src='https://katsumascore.blog/images/logo-rss-white.png'
        alt='rss'
        width={30}
        height={30}
      />
    </a>
  );
};

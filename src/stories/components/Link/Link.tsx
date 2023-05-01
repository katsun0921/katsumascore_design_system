import React from 'react';
import type { ReactNode } from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/component/_link.scss';
import '@/scss/object/utility/index.scss';

type TLinkProps = {
  backgroundColor?: string;
  children: ReactNode;
};

export const Link = ({ children, backgroundColor }: TLinkProps) => {
  return <div style={{ backgroundColor }}>{children}</div>;
};

export const LinkFacebook = ({}) => {
  return (
    <a href='#' className='c-link__social c-link__facebook' target='_blank'>
      <span className='c-link__socialText'>Share on Facebook</span>
    </a>
  );
};

export const LinkTwitter = ({}) => {
  return (
    <a href='#' className='c-link__social c-link__twitter' target='_blank'>
      <span className='c-link__socialText'>Share on Twitter</span>
    </a>
  );
};

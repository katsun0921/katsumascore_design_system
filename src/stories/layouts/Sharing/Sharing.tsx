import React from 'react';
import { LinkFacebook, LinkTwitter } from '../../components/Link/Link';
import '@/scss/object/utility/index.scss';
import '@/scss/layout/_sharing.scss';

export const Sharing = ({}) => {
  return (
    <ul className='l-sharing'>
      <li className='l-sharing__block l-sharing__twitter'>
        <LinkTwitter />
      </li>
      <li className='l-sharing__block l-sharing__facebook'>
        <LinkFacebook />
      </li>
    </ul>
  );
};

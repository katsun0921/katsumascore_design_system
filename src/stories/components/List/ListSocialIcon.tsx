import React from 'react';
import {
  LinkFacebookIcon,
  LinkTwitterIcon,
  LinkRssIcon,
} from '../Link/LinkSocialIcon';
import '@/scss/object/component/_list.scss';
import '@/scss/object/utility/index.scss';

export const ListSocialIcon = ({}) => {
  return (
    <ul className='c-list__socialLink'>
      <li>
        <LinkTwitterIcon />
      </li>
      <li>
        <LinkFacebookIcon />
      </li>
      <li>
        <LinkRssIcon />
      </li>
    </ul>
  );
};

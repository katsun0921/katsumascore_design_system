import React from 'react';
import { ListTaxonomy } from '../../components/List/ListTaxonomy';
import { ListSocialIcon } from '../../components/List/ListSocialIcon';
import type { TListTaxonomyProps } from '../../components/List/ListTaxonomy';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_footer.scss';
import '@/scss/object/utility/index.scss';

export const Footer = ({}) => {
  const categories: TListTaxonomyProps = {
    label: 'CATEGORIES',
    lists: [
      {
        name: '映画',
        link: '#',
        count: 18,
      },
      {
        name: 'アニメ',
        link: '#',
        count: 8,
      },
      {
        name: 'ドラマ',
        link: '#',
        count: 1,
      },
    ],
  };
  return (
    <footer className='l-footer'>
      <div className='l-container'>
        <section>
          <ListTaxonomy {...categories} />
        </section>
        <section className='u-mt-8 l-footer__info'>
          <ListSocialIcon />
          <div className='l-footer__support'>
            <ul className='l-footer__help'>
              <li>
                <a href=''>サイトについて</a>
              </li>
              <li>
                <a href=''>Privacy Policy</a>
              </li>
              <li>
                <a href=''>お問い合わせ</a>
              </li>
            </ul>
            <p className='u-ml-auto u-mt-auto'>
              All Rights Reserved. Developed by Katsumascore.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

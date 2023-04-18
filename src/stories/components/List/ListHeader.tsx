import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/component/_list.scss';
import '@/scss/object/utility/index.scss';

type TLinkHeader = {
  label: string;
  href: string;
  count: string;
  current?: boolean;
};
export type TLinksHeader = TLinkHeader[];

const headerNavigationMenu: TLinksHeader = [
  {
    label: 'HOME',
    href: 'http://katsumascore.local/',
    count: '',
    current: true,
  },
  {
    label: '映画',
    href: 'http://katsumascore.local/category/movie/',
    count: '12',
  },
  {
    label: 'アニメ',
    href: 'http://katsumascore.local/category/anime/',
    count: '8',
  },
  {
    label: 'ドラマ',
    href: 'http://katsumascore.local/category/drama/',
    count: '1',
  },
];

export const ListHeader = ({
  backgroundColor,
}: {
  backgroundColor: string;
}) => {
  return (
    <ul
      id='menu-category'
      className='c-list__header'
      style={{ backgroundColor }}
    >
      {headerNavigationMenu.map((link, i) => {
        return (
          <li key={i} className={link.current ? 'current-menu-item' : ''}>
            <a href={link.href}>
              <span className='progression-studios-menu-title'>
                {link.label}
              </span>
              {link.count && (
                <span className='progression-studios-nav-cat-count'>
                  {link.count}
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

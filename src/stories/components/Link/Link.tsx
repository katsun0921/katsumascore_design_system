import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/component/_link.scss';
import '@/scss/object/utility/index.scss';

type TLink = {
  label: string;
  href: string;
  count: string;
  current?: boolean;
};
export type TLinks = TLink[];

const headerNavigationMenu: TLinks = [
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

export const Link = ({}) => {
  return (
    <div>
      <button></button>
      <ul id="menu-category" className="c-link__header">
        {headerNavigationMenu.map((link, i) => {
          return (
            <li key={i} className={link.current ? 'current-menu-item' : ''}>
              <a href={link.href}>
                <span className="progression-studios-menu-title">
                  {link.label}
                </span>
                {link.count && (
                  <span className="progression-studios-nav-cat-count">
                    {link.count}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import React from 'react';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_navigation.scss';
import '@/scss/object/component/_link.scss';
import '@/scss/object/utility/index.scss';

type Link = {
  label: string;
  href: string;
  count: string;
  current?: boolean;
};
type Links = Link[];

interface NavigationProps {
  links: Links;
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <div className="l-navigation">
      <nav className="">
        <div className="menu-category-container">
          <ul
            id="menu-category"
            className="u-flex u-justify-center c-link__navigation"
          >
            {links.map((link, i) => {
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
      </nav>
    </div>
  );
};

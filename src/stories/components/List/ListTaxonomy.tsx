import React from 'react';
import '@/scss/object/component/_list.scss';
import '@/scss/object/utility/index.scss';

export type TListTaxonomyProps = {
  label: string;
  lists: TListProps[];
};

export type TListProps = {
  name: string;
  link: string;
  count: string;
};

export const ListTaxonomy = ({ label, lists }: TListTaxonomyProps) => {
  return (
    <dl className='c-list__taxonomy'>
      <dt className='c-list__term u-mb-4'>{label}</dt>
      <dd className='c-list__content'>
        <ul className='u-flex'>
          {lists.map((list, i) => {
            return (
              <li key={i} className='c-list__termList'>
                <a href={list.link}>
                  {list.name}
                  <span className='c-list__termCount'>{list.count}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </dd>
    </dl>
  );
};

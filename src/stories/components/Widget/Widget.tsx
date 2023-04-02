import React from 'react';
import type { ReactNode } from 'react';
import '@/scss/object/component/_widget.scss';
import '@/scss/object/utility/index.scss';

type TWidgetsProps = {
  children: ReactNode;
  label?: string;
  headingLevel?: '1' | '2' | '3' | '4' | '5' | '6';
  isLink?: boolean;
};

export type TWidgetsHeadingProps = {
  props: Pick<TWidgetsProps, 'label' | 'headingLevel'>;
};

export type TWidgetsTextProps = {
  props: Pick<TWidgetsProps, 'label' | 'isLink'>;
};

export const Widgets = ({ children }: TWidgetsProps) => {
  return (
    <div
      style={{
        width: '300px',
      }}
    >
      {children}
    </div>
  );
};

export const WidgetCategories = ({}) => {
  return (
    <div className='c-widget widget_categories'>
      <h2>Categories</h2>
      <ul>
        <li className='cat-item'>
          <a href='http://katsumascore.local/category/anime/'>
            アニメ<span className='count'>5</span>
          </a>
        </li>
        <li className='cat-item'>
          <a href='http://katsumascore.local/category/drama/'>
            ドラマ <span className='count'>1</span>
          </a>
        </li>
        <li className='cat-item'>
          <a href='http://katsumascore.local/category/movie/'>
            映画 <span className='count'>12</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const WidgetHeading = ({ props }: TWidgetsHeadingProps) => {
  const { label, headingLevel } = props;
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className='c-widget widget_block'>
      <HeadingTag>{label}</HeadingTag>
    </div>
  );
};

export const WidgetText = ({ props }: TWidgetsTextProps) => {
  const { label, isLink } = props;

  return (
    <div className='c-widget widget_block widget_text'>
      <p>{isLink ? <a href='#'>{label}</a> : label}</p>
    </div>
  );
};

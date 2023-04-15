import React from 'react';
import type { ReactNode } from 'react';
import { Category } from '../../components/Category/Category';
import { Score } from '../../components/Score/Score';
import { Heading } from '../../components/Heading/Heading';
import '@/scss/layout/_post.scss';
import '@/scss/object/utility/index.scss';

type TPostProps = {
  children: ReactNode;
};

export const Post = ({ children }: TPostProps) => (
  <div className='l-post'>{children}</div>
);

export const PostOverlay = ({}) => {
  return (
    <a
      className='l-postImageOverlay'
      href='#'
      style={{
        backgroundImage: 'url(/images/dummy-540X400.webp)',
      }}
    >
      <span className='u-z-20 u-absolute u-right-1-5 u-top-1-5'>
        <Score score='3' />
      </span>
      <span className='u-z-20 u-relative'>
        <Category label='映画' size='small' />
      </span>
      <div className='l-postImageOverlay__content'>
        <div className='u-p-3'>
          <Heading
            headingLevel='3'
            isLink={false}
            type='post'
            label='ジュピター[映画マトリックスのウォシャウスキー姉弟監督が手がけるSF大作]'
          />
        </div>
      </div>
    </a>
  );
};

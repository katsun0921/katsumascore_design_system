import React from 'react';
import { Category } from '../../components/Category/Category';
import { Score } from '../../components/Score/Score';
import { Heading } from '../../components/Heading/Heading';
import dummyImage from '@/assets/images/dummy-540X400.webp';
import '@/scss/layout/_post.scss';
import '@/scss/object/utility/index.scss';

export const PostOverlay = ({}) => {
  return (
    <a
      className='p-postImageOverlay'
      href='#'
      style={{
        backgroundImage: `url(${dummyImage})`,
      }}
    >
      <div className='u-z-20 u-absolute u-right-1-5 u-top-1-5'>
        <Score score='3' />
      </div>
      <div className='u-z-20 u-relative'>
        <Category label='映画' size='small' />
      </div>
      <div className='p-postImageOverlay__content'>
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

import React from 'react';
import { Category } from '../../components/Category/Category';
import { Score } from '../../components/Score/Score';
import { Heading } from '../../components/Heading/Heading';
import dummyImage from '@/assets/images/dummy-540X400.webp';
import '@/scss/layout/_post.scss';
import '@/scss/object/utility/index.scss';

type TPostTopImageProps = {
  excerpt: string;
};

export const PostTopImage = ({ excerpt }: TPostTopImageProps) => {
  return (
    <a className='p-postTopImage' href='#'>
      <div className='p-postTopImage__image'>
        <img src={dummyImage} alt='' width={540} />
        <div className='u-absolute u-right-2 u-top-2'>
          <Score score='3' />
        </div>
      </div>
      <div className='p-postTopImage__content'>
        <div>
          <div className='u-mb-4'>
            <Category label='映画' size='small' />
          </div>
          <Heading
            headingLevel='3'
            isLink={false}
            type='post'
            label='夏目漱石「私の個人主義」'
          />
          <p className='p-postTopImage__excerpt'>{excerpt}</p>
        </div>
      </div>
    </a>
  );
};

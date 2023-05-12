import React from 'react';
import { Category } from '../../components/Category/Category';
import { Score } from '../../components/Score/Score';
import { Heading } from '../../components/Heading/Heading';
import dummyImage from '@/assets/images/dummy-540X400.webp';
import '@/scss/layout/_post.scss';
import '@/scss/object/utility/index.scss';

type TPostLeftImageProps = {
  excerpt: string;
};

export const PostLeftImage = ({ excerpt }: TPostLeftImageProps) => {
  return (
    <a className='p-postLeftImage' href='#'>
      <div className='p-postLeftImage__image'>
        <img src={dummyImage} alt='' width={540} />
      </div>
      <div className='u-absolute u-right-2 u-top-2'>
        <Score score='3' />
      </div>
      <div className='p-postLeftImage__content'>
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
          <p className='u-text-black u-mt-2'>{excerpt}</p>
        </div>
      </div>
    </a>
  );
};

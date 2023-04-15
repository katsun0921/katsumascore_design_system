import React from 'react';
import { PostOverlay } from '../../project/Post/Post';
import '@/scss/foundation/_base.scss';
import '@/scss/layout/_post.scss';
import '@/scss/object/utility/index.scss';

type TPostsRelatedProps = {
  postsPerPage: number;
};

export const PostsRelatedRand = ({ postsPerPage }: TPostsRelatedProps) => {
  return (
    <div>
      <h2 className='c-heading__related u-mb-3'>こちらもおすすめ</h2>
      <ul className='l-postRelated'>
        {(function () {
          const list = [];
          for (let i = 0; i < postsPerPage; i++) {
            list.push(
              <li>
                <PostOverlay />
              </li>
            );
          }
          return list;
        })()}
      </ul>
    </div>
  );
};

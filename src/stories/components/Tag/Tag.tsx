import React from 'react';
import '@/scss/object/component/_tag.scss';
import '@/scss/object/utility/index.scss';

export type TTagsProps = {
  tags: {
    label: string;
  }[];
};

export const Tags = ({ tags }: TTagsProps) => {
  return (
    <div className='c-tags'>
      {tags.map((tag, _i) => {
        const { label } = tag;
        return <a key={_i} href='#'>{label}</a>;
      })}
    </div>
  );
};

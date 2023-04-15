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
      {tags.map((tag, i) => {
        const { label } = tag;
        return <a href='#'>{label}</a>;
      })}
    </div>
  );
};

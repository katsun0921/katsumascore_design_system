import React from 'react';
import '@/scss/object/component/_heading.scss';

type HeadingProps = {
  color?: string;
};

export const Heading = ({ color, ...props }: HeadingProps) => (
  <div>
    <h1
      className="c-heading__title"
      style={{
        color,
      }}
      {...props}
    >
      title の見出し
    </h1>
  </div>
);

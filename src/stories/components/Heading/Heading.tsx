import React from 'react';
import '@/scss/object/component/_heading.scss';

type HeadingProps = {
  color?: string;
  headingLevel: '1' | '2' | '3' | '4' | '5' | '6';
  type?: string;
  isLink: boolean;
};

export const Heading = ({
  color,
  headingLevel,
  type,
  isLink = false,
}: HeadingProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  let classProps = '';
  if (type === 'post') {
    classProps = 'c-heading__post';
  } else if (type === 'title') {
    classProps = 'c-heading__title';
  } else {
    classProps = 'c-heading';
  }

  return (
    <div style={{ backgroundColor: color }}>
      {isLink ? (
        <HeadingTag className={classProps}>
          <a href="#">title の見出し</a>
        </HeadingTag>
      ) : (
        <HeadingTag className={classProps}>title の見出し</HeadingTag>
      )}
    </div>
  );
};

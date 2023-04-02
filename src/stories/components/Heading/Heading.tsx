import React from 'react';
import '@/scss/object/component/_heading.scss';

type HeadingProps = {
  color?: string;
  headingLevel: '1' | '2' | '3' | '4' | '5' | '6';
  type?: 'post' | 'title';
  isLink: boolean;
  label: string;
};

export const Heading = ({
  headingLevel,
  type,
  isLink = false,
  label = 'title の見出し',
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
    <>
      {isLink ? (
        <HeadingTag className={classProps}>
          <a href='#'>{label}</a>
        </HeadingTag>
      ) : (
        <HeadingTag className={classProps}>{label}</HeadingTag>
      )}
    </>
  );
};

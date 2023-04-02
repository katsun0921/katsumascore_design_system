import React from 'react';
import '@/scss/object/component/_category.scss';

type CategoryProps = {
  label?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Category = ({ label, size, ...props }: CategoryProps) => {
  const mode = !!size ? `c-category__${size}` : '';
  return (
    <a className={['c-category', mode].join(' ')} href=''>
      {label}
    </a>
  );
};

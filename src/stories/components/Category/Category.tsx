import React from 'react';
import '@/scss/object/component/_category.scss';

type CategoryProps = {
  label?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Category = ({ label, size }: CategoryProps) => {
  const mode = !!size ? `c-category__${size}` : '';
  return <div className={['c-category', mode].join(' ')}>{label}</div>;
};

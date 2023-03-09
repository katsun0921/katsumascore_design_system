import React from 'react';
import '@/scss/object/component/_category.scss';

type CategoryProps = {
  label?: string;
};

export const Category = ({ label, ...props }: CategoryProps) => (
  <a className="c-category" href="">
    {label}
  </a>
);

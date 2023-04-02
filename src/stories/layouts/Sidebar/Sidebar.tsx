import React from 'react';
import {
  WidgetCategories,
  WidgetHeading,
  WidgetText,
} from '../../components/Widget/Widget';
import type {
  TWidgetsHeadingProps,
  TWidgetsTextProps,
} from '../../components/Widget/Widget';
import '@/scss/layout/_container.scss';
import '@/scss/layout/_sidebar.scss';
import '@/scss/object/utility/index.scss';

export const Sidebar = ({}) => {
  const headingProps: TWidgetsHeadingProps = {
    props: {
      label: 'Title',
      headingLevel: '2',
    },
  };
  const linkTextProps: TWidgetsTextProps = {
    props: {
      label: 'お問い合わせ',
      isLink: true,
    },
  };

  return (
    <div className='l-sidebar'>
      <WidgetCategories />
      <WidgetHeading {...headingProps} />
      <WidgetText {...linkTextProps} />
    </div>
  );
};

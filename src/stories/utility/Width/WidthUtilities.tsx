import React from 'react';
import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_width.scss';

/**
 * Width utility groups
 */
export const widthGroups: TUtilityGroup[] = [
  {
    label: 'Fixed Widths',
    description: 'Set a fixed width for an element',
    items: [
      { className: 'u-w-0', cssProperty: 'width', cssValue: '0px' },
      { className: 'u-w-px', cssProperty: 'width', cssValue: '1px' },
      { className: 'u-w-0_5', cssProperty: 'width', cssValue: '0.125rem' },
      { className: 'u-w-1', cssProperty: 'width', cssValue: '0.25rem' },
      { className: 'u-w-2', cssProperty: 'width', cssValue: '0.5rem' },
      { className: 'u-w-3', cssProperty: 'width', cssValue: '0.75rem' },
      { className: 'u-w-4', cssProperty: 'width', cssValue: '1rem' },
      { className: 'u-w-5', cssProperty: 'width', cssValue: '1.25rem' },
      { className: 'u-w-6', cssProperty: 'width', cssValue: '1.5rem' },
      { className: 'u-w-8', cssProperty: 'width', cssValue: '2rem' },
      { className: 'u-w-10', cssProperty: 'width', cssValue: '2.5rem' },
      { className: 'u-w-12', cssProperty: 'width', cssValue: '3rem' },
      { className: 'u-w-16', cssProperty: 'width', cssValue: '4rem' },
      { className: 'u-w-20', cssProperty: 'width', cssValue: '5rem' },
      { className: 'u-w-24', cssProperty: 'width', cssValue: '6rem' },
      { className: 'u-w-32', cssProperty: 'width', cssValue: '8rem' },
      { className: 'u-w-40', cssProperty: 'width', cssValue: '10rem' },
      { className: 'u-w-48', cssProperty: 'width', cssValue: '12rem' },
      { className: 'u-w-56', cssProperty: 'width', cssValue: '14rem' },
      { className: 'u-w-64', cssProperty: 'width', cssValue: '16rem' },
      { className: 'u-w-72', cssProperty: 'width', cssValue: '18rem' },
      { className: 'u-w-80', cssProperty: 'width', cssValue: '20rem' },
      { className: 'u-w-96', cssProperty: 'width', cssValue: '24rem' },
    ],
  },
  {
    label: 'Percentage Widths',
    description: 'Set width as a percentage of the parent element',
    items: [
      { className: 'u-w-20per', cssProperty: 'width', cssValue: '20%' },
      { className: 'u-w-25per', cssProperty: 'width', cssValue: '25%' },
      { className: 'u-w-40per', cssProperty: 'width', cssValue: '40%' },
      { className: 'u-w-50per', cssProperty: 'width', cssValue: '50%' },
      { className: 'u-w-60per', cssProperty: 'width', cssValue: '60%' },
      { className: 'u-w-75per', cssProperty: 'width', cssValue: '75%' },
      { className: 'u-w-80per', cssProperty: 'width', cssValue: '80%' },
      { className: 'u-w-full', cssProperty: 'width', cssValue: '100%' },
    ],
  },
  {
    label: 'Special Widths',
    description: 'Special width values',
    items: [
      { className: 'u-w-auto', cssProperty: 'width', cssValue: 'auto' },
      { className: 'u-w-screen', cssProperty: 'width', cssValue: '100vw' },
      { className: 'u-w-min', cssProperty: 'width', cssValue: 'min-content' },
      { className: 'u-w-max', cssProperty: 'width', cssValue: 'max-content' },
      { className: 'u-w-fit', cssProperty: 'width', cssValue: 'fit-content' },
      { className: 'u-w-custom-property', cssProperty: 'width', cssValue: 'var(--custom-width)' },
    ],
  },
];

/**
 * Custom preview component for width utilities
 */
export const WidthPreview = ({ className }: { className: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f4f6',
        border: '1px dashed #9ca3af',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div
        className={className}
        style={{
          height: '20px',
          backgroundColor: '#3b82f6',
          borderRadius: '2px',
          minWidth: '4px',
        }}
      />
    </div>
  );
};

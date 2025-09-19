import React from 'react';
import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_padding.scss';

/**
 * Padding utility groups
 */
export const paddingGroups: TUtilityGroup[] = [
  {
    label: 'All Sides',
    description: 'Set padding on all sides of an element',
    items: [
      { className: 'u-p-0', cssProperty: 'padding', cssValue: '0px' },
      { className: 'u-p-px', cssProperty: 'padding', cssValue: '1px' },
      { className: 'u-p-0_5', cssProperty: 'padding', cssValue: '0.125rem' },
      { className: 'u-p-1', cssProperty: 'padding', cssValue: '0.25rem' },
      { className: 'u-p-1_5', cssProperty: 'padding', cssValue: '0.375rem' },
      { className: 'u-p-2', cssProperty: 'padding', cssValue: '0.5rem' },
      { className: 'u-p-2_5', cssProperty: 'padding', cssValue: '0.625rem' },
      { className: 'u-p-3', cssProperty: 'padding', cssValue: '0.75rem' },
      { className: 'u-p-3_5', cssProperty: 'padding', cssValue: '0.875rem' },
      { className: 'u-p-4', cssProperty: 'padding', cssValue: '1rem' },
      { className: 'u-p-5', cssProperty: 'padding', cssValue: '1.25rem' },
      { className: 'u-p-6', cssProperty: 'padding', cssValue: '1.5rem' },
      { className: 'u-p-8', cssProperty: 'padding', cssValue: '2rem' },
      { className: 'u-p-10', cssProperty: 'padding', cssValue: '2.5rem' },
      { className: 'u-p-12', cssProperty: 'padding', cssValue: '3rem' },
      { className: 'u-p-50px', cssProperty: 'padding', cssValue: '50px' },
      { className: 'u-p-60px', cssProperty: 'padding', cssValue: '60px' },
    ],
  },
  {
    label: 'Top',
    description: 'Set padding-top',
    items: [
      { className: 'u-pt-0', cssProperty: 'padding-top', cssValue: '0px' },
      { className: 'u-pt-1', cssProperty: 'padding-top', cssValue: '0.25rem' },
      { className: 'u-pt-2', cssProperty: 'padding-top', cssValue: '0.5rem' },
      { className: 'u-pt-3', cssProperty: 'padding-top', cssValue: '0.75rem' },
      { className: 'u-pt-4', cssProperty: 'padding-top', cssValue: '1rem' },
      { className: 'u-pt-6', cssProperty: 'padding-top', cssValue: '1.5rem' },
      { className: 'u-pt-8', cssProperty: 'padding-top', cssValue: '2rem' },
    ],
  },
  {
    label: 'Right',
    description: 'Set padding-right',
    items: [
      { className: 'u-pr-0', cssProperty: 'padding-right', cssValue: '0px' },
      { className: 'u-pr-1', cssProperty: 'padding-right', cssValue: '0.25rem' },
      { className: 'u-pr-2', cssProperty: 'padding-right', cssValue: '0.5rem' },
      { className: 'u-pr-3', cssProperty: 'padding-right', cssValue: '0.75rem' },
      { className: 'u-pr-4', cssProperty: 'padding-right', cssValue: '1rem' },
      { className: 'u-pr-6', cssProperty: 'padding-right', cssValue: '1.5rem' },
      { className: 'u-pr-8', cssProperty: 'padding-right', cssValue: '2rem' },
    ],
  },
  {
    label: 'Bottom',
    description: 'Set padding-bottom',
    items: [
      { className: 'u-pb-0', cssProperty: 'padding-bottom', cssValue: '0px' },
      { className: 'u-pb-1', cssProperty: 'padding-bottom', cssValue: '0.25rem' },
      { className: 'u-pb-2', cssProperty: 'padding-bottom', cssValue: '0.5rem' },
      { className: 'u-pb-3', cssProperty: 'padding-bottom', cssValue: '0.75rem' },
      { className: 'u-pb-4', cssProperty: 'padding-bottom', cssValue: '1rem' },
      { className: 'u-pb-6', cssProperty: 'padding-bottom', cssValue: '1.5rem' },
      { className: 'u-pb-8', cssProperty: 'padding-bottom', cssValue: '2rem' },
    ],
  },
  {
    label: 'Left',
    description: 'Set padding-left',
    items: [
      { className: 'u-pl-0', cssProperty: 'padding-left', cssValue: '0px' },
      { className: 'u-pl-1', cssProperty: 'padding-left', cssValue: '0.25rem' },
      { className: 'u-pl-2', cssProperty: 'padding-left', cssValue: '0.5rem' },
      { className: 'u-pl-3', cssProperty: 'padding-left', cssValue: '0.75rem' },
      { className: 'u-pl-4', cssProperty: 'padding-left', cssValue: '1rem' },
      { className: 'u-pl-6', cssProperty: 'padding-left', cssValue: '1.5rem' },
      { className: 'u-pl-8', cssProperty: 'padding-left', cssValue: '2rem' },
    ],
  },
  {
    label: 'Horizontal',
    description: 'Set padding-left and padding-right',
    items: [
      { className: 'u-px-0', cssProperty: 'padding-left, padding-right', cssValue: '0px' },
      { className: 'u-px-1', cssProperty: 'padding-left, padding-right', cssValue: '0.25rem' },
      { className: 'u-px-2', cssProperty: 'padding-left, padding-right', cssValue: '0.5rem' },
      { className: 'u-px-3', cssProperty: 'padding-left, padding-right', cssValue: '0.75rem' },
      { className: 'u-px-4', cssProperty: 'padding-left, padding-right', cssValue: '1rem' },
      { className: 'u-px-6', cssProperty: 'padding-left, padding-right', cssValue: '1.5rem' },
      { className: 'u-px-8', cssProperty: 'padding-left, padding-right', cssValue: '2rem' },
    ],
  },
  {
    label: 'Vertical',
    description: 'Set padding-top and padding-bottom',
    items: [
      { className: 'u-py-0', cssProperty: 'padding-top, padding-bottom', cssValue: '0px' },
      { className: 'u-py-1', cssProperty: 'padding-top, padding-bottom', cssValue: '0.25rem' },
      { className: 'u-py-2', cssProperty: 'padding-top, padding-bottom', cssValue: '0.5rem' },
      { className: 'u-py-3', cssProperty: 'padding-top, padding-bottom', cssValue: '0.75rem' },
      { className: 'u-py-4', cssProperty: 'padding-top, padding-bottom', cssValue: '1rem' },
      { className: 'u-py-6', cssProperty: 'padding-top, padding-bottom', cssValue: '1.5rem' },
      { className: 'u-py-8', cssProperty: 'padding-top, padding-bottom', cssValue: '2rem' },
    ],
  },
];

/**
 * Custom preview component for padding utilities
 */
export const PaddingPreview = ({ className }: { className: string }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f4f6',
        border: '1px dashed #9ca3af',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className={className}
        style={{
          width: '40px',
          height: '20px',
          backgroundColor: '#3b82f6',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

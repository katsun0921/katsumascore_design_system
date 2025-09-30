import React from 'react';
import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_textAlign.scss';

/**
 * Text alignment utility groups
 */
export const textAlignGroups: TUtilityGroup[] = [
  {
    label: 'Text Alignment',
    description: 'Control the text alignment of an element',
    items: [
      { className: 'u-text-left', cssProperty: 'text-align', cssValue: 'left' },
      { className: 'u-text-center', cssProperty: 'text-align', cssValue: 'center' },
      { className: 'u-text-right', cssProperty: 'text-align', cssValue: 'right' },
      { className: 'u-text-justify', cssProperty: 'text-align', cssValue: 'justify' },
      { className: 'u-text-start', cssProperty: 'text-align', cssValue: 'start' },
      { className: 'u-text-end', cssProperty: 'text-align', cssValue: 'end' },
    ],
  },
];

/**
 * Custom preview component for text alignment utilities
 */
export const TextAlignPreview = ({ className }: { className: string }) => {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f4f6',
        border: '1px dashed #9ca3af',
        padding: '8px',
        fontSize: '12px',
        lineHeight: '1.2',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  );
};

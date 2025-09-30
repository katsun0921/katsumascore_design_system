import React from 'react';
import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_display.scss';

/**
 * Display utility groups
 */
export const displayGroups: TUtilityGroup[] = [
  {
    label: 'Display',
    description: 'Control the display box type of an element',
    items: [
      { className: 'u-block', cssProperty: 'display', cssValue: 'block' },
      { className: 'u-inline-block', cssProperty: 'display', cssValue: 'inline-block' },
      { className: 'u-inline', cssProperty: 'display', cssValue: 'inline' },
      { className: 'u-flex', cssProperty: 'display', cssValue: 'flex' },
      { className: 'u-inline-flex', cssProperty: 'display', cssValue: 'inline-flex' },
      { className: 'u-table', cssProperty: 'display', cssValue: 'table' },
      { className: 'u-inline-table', cssProperty: 'display', cssValue: 'inline-table' },
      { className: 'u-table-caption', cssProperty: 'display', cssValue: 'table-caption' },
      { className: 'u-table-cell', cssProperty: 'display', cssValue: 'table-cell' },
      { className: 'u-table-column', cssProperty: 'display', cssValue: 'table-column' },
      { className: 'u-table-column-group', cssProperty: 'display', cssValue: 'table-column-group' },
      { className: 'u-table-footer-group', cssProperty: 'display', cssValue: 'table-footer-group' },
      { className: 'u-table-header-group', cssProperty: 'display', cssValue: 'table-header-group' },
      { className: 'u-table-row-group', cssProperty: 'display', cssValue: 'table-row-group' },
      { className: 'u-table-row', cssProperty: 'display', cssValue: 'table-row' },
      { className: 'u-flow-root', cssProperty: 'display', cssValue: 'flow-root' },
      { className: 'u-grid', cssProperty: 'display', cssValue: 'grid' },
      { className: 'u-inline-grid', cssProperty: 'display', cssValue: 'inline-grid' },
      { className: 'u-contents', cssProperty: 'display', cssValue: 'contents' },
      { className: 'u-list-item', cssProperty: 'display', cssValue: 'list-item' },
      { className: 'u-hidden', cssProperty: 'display', cssValue: 'none' },
    ],
  },
];

/**
 * Custom preview component for display utilities
 */
export const DisplayPreview = ({ className }: { className: string }) => {
  const getPreviewContent = () => {
    if (className === 'u-hidden') {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            border: '1px dashed #9ca3af',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '12px',
          }}
        >
          Hidden
        </div>
      );
    }

    if (className.includes('flex') || className.includes('grid')) {
      return (
        <div
          className={className}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            border: '1px dashed #9ca3af',
            gap: '4px',
            padding: '4px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#3b82f6',
              borderRadius: '2px',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#10b981',
              borderRadius: '2px',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#f59e0b',
              borderRadius: '2px',
            }}
          />
        </div>
      );
    }

    if (className.includes('table')) {
      return (
        <div
          className={className}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            border: '1px dashed #9ca3af',
            padding: '4px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#3b82f6',
              borderRadius: '1px',
              marginBottom: '2px',
            }}
          />
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '1px',
            }}
          />
        </div>
      );
    }

    // Default block/inline preview
    return (
      <div
        className={className}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f3f4f6',
          border: '1px dashed #9ca3af',
          padding: '4px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '12px',
            backgroundColor: '#3b82f6',
            borderRadius: '2px',
          }}
        />
      </div>
    );
  };

  return getPreviewContent();
};

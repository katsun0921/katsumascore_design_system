import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_margin.scss';

/**
 * Margin utility groups
 */
export const marginGroups: TUtilityGroup[] = [
  {
    label: 'All Sides',
    description: 'Set margin on all sides of an element',
    items: [
      { className: 'u-m-0', cssProperty: 'margin', cssValue: '0px' },
      { className: 'u-m-px', cssProperty: 'margin', cssValue: '1px' },
      { className: 'u-m-0_5', cssProperty: 'margin', cssValue: '0.125rem' },
      { className: 'u-m-1', cssProperty: 'margin', cssValue: '0.25rem' },
      { className: 'u-m-1_5', cssProperty: 'margin', cssValue: '0.375rem' },
      { className: 'u-m-2', cssProperty: 'margin', cssValue: '0.5rem' },
      { className: 'u-m-2_5', cssProperty: 'margin', cssValue: '0.625rem' },
      { className: 'u-m-3', cssProperty: 'margin', cssValue: '0.75rem' },
      { className: 'u-m-3_5', cssProperty: 'margin', cssValue: '0.875rem' },
      { className: 'u-m-4', cssProperty: 'margin', cssValue: '1rem' },
      { className: 'u-m-5', cssProperty: 'margin', cssValue: '1.25rem' },
      { className: 'u-m-6', cssProperty: 'margin', cssValue: '1.5rem' },
      { className: 'u-m-8', cssProperty: 'margin', cssValue: '2rem' },
      { className: 'u-m-10', cssProperty: 'margin', cssValue: '2.5rem' },
      { className: 'u-m-12', cssProperty: 'margin', cssValue: '3rem' },
      { className: 'u-m-auto', cssProperty: 'margin', cssValue: 'auto' },
    ],
  },
  {
    label: 'Top',
    description: 'Set margin-top',
    items: [
      { className: 'u-mt-0', cssProperty: 'margin-top', cssValue: '0px' },
      { className: 'u-mt-1', cssProperty: 'margin-top', cssValue: '0.25rem' },
      { className: 'u-mt-2', cssProperty: 'margin-top', cssValue: '0.5rem' },
      { className: 'u-mt-3', cssProperty: 'margin-top', cssValue: '0.75rem' },
      { className: 'u-mt-4', cssProperty: 'margin-top', cssValue: '1rem' },
      { className: 'u-mt-6', cssProperty: 'margin-top', cssValue: '1.5rem' },
      { className: 'u-mt-8', cssProperty: 'margin-top', cssValue: '2rem' },
      { className: 'u-mt-auto', cssProperty: 'margin-top', cssValue: 'auto' },
    ],
  },
  {
    label: 'Right',
    description: 'Set margin-right',
    items: [
      { className: 'u-mr-0', cssProperty: 'margin-right', cssValue: '0px' },
      { className: 'u-mr-1', cssProperty: 'margin-right', cssValue: '0.25rem' },
      { className: 'u-mr-2', cssProperty: 'margin-right', cssValue: '0.5rem' },
      { className: 'u-mr-3', cssProperty: 'margin-right', cssValue: '0.75rem' },
      { className: 'u-mr-4', cssProperty: 'margin-right', cssValue: '1rem' },
      { className: 'u-mr-6', cssProperty: 'margin-right', cssValue: '1.5rem' },
      { className: 'u-mr-8', cssProperty: 'margin-right', cssValue: '2rem' },
      { className: 'u-mr-auto', cssProperty: 'margin-right', cssValue: 'auto' },
    ],
  },
  {
    label: 'Bottom',
    description: 'Set margin-bottom',
    items: [
      { className: 'u-mb-0', cssProperty: 'margin-bottom', cssValue: '0px' },
      { className: 'u-mb-1', cssProperty: 'margin-bottom', cssValue: '0.25rem' },
      { className: 'u-mb-2', cssProperty: 'margin-bottom', cssValue: '0.5rem' },
      { className: 'u-mb-3', cssProperty: 'margin-bottom', cssValue: '0.75rem' },
      { className: 'u-mb-4', cssProperty: 'margin-bottom', cssValue: '1rem' },
      { className: 'u-mb-6', cssProperty: 'margin-bottom', cssValue: '1.5rem' },
      { className: 'u-mb-8', cssProperty: 'margin-bottom', cssValue: '2rem' },
      { className: 'u-mb-auto', cssProperty: 'margin-bottom', cssValue: 'auto' },
    ],
  },
  {
    label: 'Left',
    description: 'Set margin-left',
    items: [
      { className: 'u-ml-0', cssProperty: 'margin-left', cssValue: '0px' },
      { className: 'u-ml-1', cssProperty: 'margin-left', cssValue: '0.25rem' },
      { className: 'u-ml-2', cssProperty: 'margin-left', cssValue: '0.5rem' },
      { className: 'u-ml-3', cssProperty: 'margin-left', cssValue: '0.75rem' },
      { className: 'u-ml-4', cssProperty: 'margin-left', cssValue: '1rem' },
      { className: 'u-ml-6', cssProperty: 'margin-left', cssValue: '1.5rem' },
      { className: 'u-ml-8', cssProperty: 'margin-left', cssValue: '2rem' },
      { className: 'u-ml-auto', cssProperty: 'margin-left', cssValue: 'auto' },
    ],
  },
  {
    label: 'Horizontal',
    description: 'Set margin-left and margin-right',
    items: [
      { className: 'u-mx-0', cssProperty: 'margin-left, margin-right', cssValue: '0px' },
      { className: 'u-mx-1', cssProperty: 'margin-left, margin-right', cssValue: '0.25rem' },
      { className: 'u-mx-2', cssProperty: 'margin-left, margin-right', cssValue: '0.5rem' },
      { className: 'u-mx-3', cssProperty: 'margin-left, margin-right', cssValue: '0.75rem' },
      { className: 'u-mx-4', cssProperty: 'margin-left, margin-right', cssValue: '1rem' },
      { className: 'u-mx-6', cssProperty: 'margin-left, margin-right', cssValue: '1.5rem' },
      { className: 'u-mx-8', cssProperty: 'margin-left, margin-right', cssValue: '2rem' },
      { className: 'u-mx-auto', cssProperty: 'margin-left, margin-right', cssValue: 'auto' },
    ],
  },
  {
    label: 'Vertical',
    description: 'Set margin-top and margin-bottom',
    items: [
      { className: 'u-my-0', cssProperty: 'margin-top, margin-bottom', cssValue: '0px' },
      { className: 'u-my-1', cssProperty: 'margin-top, margin-bottom', cssValue: '0.25rem' },
      { className: 'u-my-2', cssProperty: 'margin-top, margin-bottom', cssValue: '0.5rem' },
      { className: 'u-my-3', cssProperty: 'margin-top, margin-bottom', cssValue: '0.75rem' },
      { className: 'u-my-4', cssProperty: 'margin-top, margin-bottom', cssValue: '1rem' },
      { className: 'u-my-6', cssProperty: 'margin-top, margin-bottom', cssValue: '1.5rem' },
      { className: 'u-my-8', cssProperty: 'margin-top, margin-bottom', cssValue: '2rem' },
      { className: 'u-my-auto', cssProperty: 'margin-top, margin-bottom', cssValue: 'auto' },
    ],
  },
];

/**
 * Custom preview component for margin utilities
 */
export const MarginPreview = ({ className }: { className: string }) => {
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

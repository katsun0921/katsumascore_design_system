import { TUtilityGroup } from '../UtilityComponent';
import '@/scss/object/utility/_fontSize.scss';

/**
 * Font size utility groups
 */
export const fontSizeGroups: TUtilityGroup[] = [
  {
    label: 'Font Size',
    description: 'Control the font size of an element',
    items: [
      { className: 'u-text-xs', cssProperty: 'font-size', cssValue: '0.75rem (12px)' },
      { className: 'u-text-sm', cssProperty: 'font-size', cssValue: '0.875rem (14px)' },
      { className: 'u-text-base', cssProperty: 'font-size', cssValue: '1rem (16px)' },
      { className: 'u-text-lg', cssProperty: 'font-size', cssValue: '1.125rem (18px)' },
      { className: 'u-text-xl', cssProperty: 'font-size', cssValue: '1.25rem (20px)' },
      { className: 'u-text-2xl', cssProperty: 'font-size', cssValue: '1.5rem (24px)' },
      { className: 'u-text-3xl', cssProperty: 'font-size', cssValue: '1.875rem (30px)' },
      { className: 'u-text-4xl', cssProperty: 'font-size', cssValue: '2.25rem (36px)' },
      { className: 'u-text-5xl', cssProperty: 'font-size', cssValue: '3rem (48px)' },
      { className: 'u-text-6xl', cssProperty: 'font-size', cssValue: '3.75rem (60px)' },
      { className: 'u-text-7xl', cssProperty: 'font-size', cssValue: '4.5rem (72px)' },
      { className: 'u-text-8xl', cssProperty: 'font-size', cssValue: '6rem (96px)' },
      { className: 'u-text-9xl', cssProperty: 'font-size', cssValue: '8rem (128px)' },
    ],
  },
];

/**
 * Custom preview component for font size utilities
 */
export const FontSizePreview = ({ className }: { className: string }) => {
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
        justifyContent: 'center',
      }}
    >
      <span
        className={className}
        style={{
          color: '#1f2937',
          fontWeight: '500',
        }}
      >
        Aa
      </span>
    </div>
  );
};

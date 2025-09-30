import React from 'react';

export type TUtilityItem = {
  className: string;
  description?: string;
  cssProperty?: string;
  cssValue?: string;
};

export type TUtilityGroup = {
  label: string;
  description?: string;
  items: TUtilityItem[];
};

type UtilityItemProps = {
  item: TUtilityItem;
  showPreview?: boolean;
  previewContent?: React.ReactNode;
};

/**
 * Individual utility item component
 */
export const UtilityItem = ({
  item,
  showPreview = true,
  previewContent
}: UtilityItemProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        marginBottom: '8px',
        backgroundColor: '#ffffff',
        minHeight: '60px',
      }}
    >
      {showPreview && (
        <div
          style={{
            width: '120px',
            height: '40px',
            marginRight: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            backgroundColor: '#f9fafb',
            flexShrink: 0,
          }}
        >
          {previewContent || (
            <div
              className={item.className}
              style={{
                width: '80px',
                height: '20px',
                backgroundColor: '#3b82f6',
                borderRadius: '2px',
              }}
            />
          )}
        </div>
      )}

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '4px',
          }}
        >
          {item.className}
        </div>

        {item.description && (
          <div
            style={{
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '4px',
            }}
          >
            {item.description}
          </div>
        )}

        {item.cssProperty && item.cssValue && (
          <div
            style={{
              fontSize: '12px',
              color: '#059669',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            }}
          >
            {item.cssProperty}: {item.cssValue}
          </div>
        )}
      </div>
    </div>
  );
};

type UtilityGroupProps = {
  group: TUtilityGroup;
  showPreview?: boolean;
  getPreviewContent?: (item: TUtilityItem) => React.ReactNode;
};

/**
 * Utility group component
 */
export const UtilityGroup = ({
  group,
  showPreview = true,
  getPreviewContent
}: UtilityGroupProps) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3
        style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '8px',
        }}
      >
        {group.label}
      </h3>

      {group.description && (
        <p
          style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '16px',
          }}
        >
          {group.description}
        </p>
      )}

      <div>
        {group.items.map((item, index) => (
          <UtilityItem
            key={index}
            item={item}
            showPreview={showPreview}
            previewContent={getPreviewContent ? getPreviewContent(item) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

type UtilityListProps = {
  groups: TUtilityGroup[];
  showPreview?: boolean;
  getPreviewContent?: (item: TUtilityItem) => React.ReactNode;
};

/**
 * Main utility list component
 */
export const UtilityList = ({
  groups,
  showPreview = true,
  getPreviewContent
}: UtilityListProps) => {
  return (
    <div style={{ padding: '24px' }}>
      <h1
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '8px',
        }}
      >
        Utility Classes
      </h1>

      <p
        style={{
          fontSize: '16px',
          color: '#6b7280',
          marginBottom: '32px',
        }}
      >
        A comprehensive list of utility classes available in the design system.
      </p>

      {groups.map((group, index) => (
        <UtilityGroup
          key={index}
          group={group}
          showPreview={showPreview}
          getPreviewContent={getPreviewContent}
        />
      ))}
    </div>
  );
};

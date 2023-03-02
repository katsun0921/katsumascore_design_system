import React from 'react';
import '../../../../../scss/object/utility/_color.scss';

export type TColorList = {
  label: string;
  value: {
    className: string;
  }[];
}[];

type ColorProps = {
  className: string;
};

/**
 * Color component
 */
export const Color = ({ className }: ColorProps) => {
  return (
    <div
      style={{
        width: '120px',
        marginLeft: '10px',
      }}
    >
      <div
        className={className}
        style={{
          width: '90px',
          height: '90px',
          margin: '0 auto',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
        }}
      ></div>
      <p>{className}</p>
    </div>
  );
};

/**
 * Colors list
 */
export const Colors = ({ colorList }: { colorList: TColorList }) => {
  return (
    <div>
      <h2>color</h2>
      {colorList.map((color, index) => {
        return (
          <div key={index}>
            <h2>{color.label}</h2>
            <div
              style={{
                display: 'flex',
              }}
            >
              {color.value.map((color, index) => {
                return <Color key={index} className={color.className} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

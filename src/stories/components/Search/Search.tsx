import React from 'react';
import '@/scss/object/component/_search.scss';

interface SearchProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Search = ({ label, ...props }: SearchProps) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(30, 2, 61)',
        padding: '20px 0',
      }}
    >
      <form method="get" className="c-search" action="">
        <label>
          <span className="screen-reader-text"></span>
          <input
            type="search"
            className="c-search__field"
            placeholder="Enter a keyword to search..."
            value=""
            name="s"
          />
        </label>
        <input type="submit" className="search-submit" value="" />
      </form>
    </div>
  );
};

import React from 'react';
import '@/scss/object/component/_search.scss';
import '@/scss/object/utility/index.scss';
import magnifyingGlass from '@/assets/images/magnifying-glass.png';

/**
 * Primary UI component for user interaction
 */
export const Search = ({}) => {
  return (
    <form method="get" className="c-search" action="">
      <label className="u-relative c-search__label">
        <span className="screen-reader-text"></span>
        <input
          type="search"
          className="c-search__field"
          placeholder="Enter a keyword to search..."
          title="Search keyword"
          value=""
          name="s"
        />
        <img
          className="u-absolute u-inset-y-0 u-my-auto"
          src={magnifyingGlass}
          alt=""
          width="32"
          height="32"
        />
      </label>
      <input type="submit" className="u-hidden search-submit" value="" />
    </form>
  );
};

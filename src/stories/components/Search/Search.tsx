import React from 'react';
import '@/scss/object/component/_search.scss';
import '@/scss/object/utility/index.scss';
import magnifyingGlass from '@/assets/images/magnifying-glass.png';

/**
 * Primary UI component for user interaction
 */
export const Search = ({}) => {
  return (
    <form method="get" className="c-search u-flex" action="">
      <label className="c-search__label">
        <span className="screen-reader-text"></span>
        <input
          type="search"
          className="c-search__field"
          placeholder="Enter a keyword to search..."
          title="Search keyword"
          value=""
          name="s"
        />
      </label>
      <input
        type="submit"
        style={{ backgroundImage: `url(${magnifyingGlass})` }}
        className="search-submit c-search__submit"
        value=""
      />
    </form>
  );
};

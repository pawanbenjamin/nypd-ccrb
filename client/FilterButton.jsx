import React from 'react';
import { toggleFilter } from './utils';

export const FilterButton = ({
  ethnicity,
  filter,
  setFilter,
  count,
  backgroundColor,
}) => {
  const activeButton = {
    backgroundColor: `${backgroundColor}`,
    color: 'white',
    border: `1px  solid white`,
  };
  const inactiveButton = {
    color: `${backgroundColor}`,
    backgroundColor: 'white',
    border: `1px solid ${backgroundColor}`,
  };

  return (
    <button
      className="filter-button"
      id={`button-${ethnicity}`}
      key={ethnicity}
      type="button"
      onClick={() => toggleFilter('ethnicity', ethnicity, filter, setFilter)}
      style={filter.ethnicity === ethnicity ? activeButton : inactiveButton}
    >
      {ethnicity} ({count})
    </button>
  );
};

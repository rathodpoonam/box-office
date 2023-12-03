import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [serachOption, setSearchOption] = useState('shows');
  const onSearchInputChnage = e => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const options = {
      q: searchStr,
      serachOption,
    };
    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChnage} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={serachOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={serachOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

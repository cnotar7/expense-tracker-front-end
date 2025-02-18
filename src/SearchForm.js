import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Enter search query"
        value={query}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

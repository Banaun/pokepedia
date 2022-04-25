import React, { useState } from "react";

function SearchBar({ sortBySearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sortBySearch(searchInput);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for Pokemon..."
          name="search"
          onChange={handleChange}
          value={searchInput}
        ></input>
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  );
}

export default SearchBar;

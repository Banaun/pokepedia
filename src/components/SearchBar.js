import React, { useState } from "react";
import { FaSearch, FaDiceD20, FaTimes } from "react-icons/fa";

function SearchBar({ sortBySearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      sortBySearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sortBySearch(searchInput);
  };

  const handleClick = () => {
    setSearchInput((Math.floor(Math.random() * 898) + 1).toString());
    sortBySearch(searchInput);
  };

  const handleClear = () => {
    setSearchInput("");
    sortBySearch("");
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
        <FaTimes
          className="search-clear"
          onClick={handleClear}
          style={{ cursor: "pointer" }}
        />
        <button className="search-button" title="Search" type="submit">
          <FaSearch />
        </button>
        <button
          className="random-pokemon-button"
          title="Show random pokemon"
          onClick={handleClick}
        >
          <FaDiceD20 />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

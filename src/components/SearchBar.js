import React from "react";

const SearchBar = () => {
  return (
    <form id="search-bar">
      <input type="text" defaultValue="Search ..."/>
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;

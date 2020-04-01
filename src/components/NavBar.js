import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <Link to="\all">Browse</Link>
      <Link to="\organization">Organization</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;

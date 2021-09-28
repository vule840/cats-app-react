import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink activeClassName="activeLink" to="/cats">
        Cats
      </NavLink>
      <NavLink activeClassName="activeLink" to="/favorites">
        Favorites
      </NavLink>
      <NavLink activeClassName="activeLink" to="/localstorage">
        Local storage
      </NavLink>
    </header>
  );
};

export default Header;

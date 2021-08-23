import React from "react";
import { NavLink } from "react-router-dom";
import navs from "../Routes/navbars";
function NavBar() {
  return (
    <nav>
      <ul>
        {navs.map((nav, key) => {
          return (
            <li key={key}>
              <NavLink to={nav.pagePath}>{nav.pageName}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;

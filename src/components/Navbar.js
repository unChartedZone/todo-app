import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__main container mx-auto">
        <ul className="nav__items">
          <li className="nav__item">
            <NavLink
              activeClassName="nav__link--active"
              exact
              className="nav__link"
              to="/"
            >
              Todos
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              activeClassName="nav__link--active"
              className="nav__link"
              to="/dev"
            >
              Dev
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

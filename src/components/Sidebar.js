import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {props.collections.map((list) => {
          return (
            <li key={list.id} className="body--1">
              <NavLink to={`/${list.name}`}>{list.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

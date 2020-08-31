import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {props.collections.map((list) => {
          return (
            <li key={list.id} className="body--1">
              <NavLink to={`/todos/${list.id}`}>{list.name}</NavLink>
            </li>
          );
        })}
        <li className="body--1">
          <NavLink to="/todos">New List</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

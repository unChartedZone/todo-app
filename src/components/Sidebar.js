import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {props.collections.map((list) => {
          return (
            <li key={list.collectionId} className="sidebar__item">
              <NavLink className="sidebar__link" to={`/todos/${list.collectionId}`}>{list.name}</NavLink>
            </li>
          );
        })}
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to="/todos">New List</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

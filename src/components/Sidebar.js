import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {Object.keys(props.collections).map((collectionId) => {
          return (
            <li key={collectionId} className="sidebar__item">
              <NavLink className="sidebar__link" to={`/todos/${collectionId}`}>
                {props.collections[collectionId].name}
              </NavLink>
            </li>
          );
        })}
        {/* {props.collections.map((list) => {
          return (
            <li key={list.collectionId} className="sidebar__item">
              <NavLink className="sidebar__link" to={`/todos/${list.collectionId}`}>{list.name}</NavLink>
            </li>
          );
        })} */}
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to="/todos">
            New List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

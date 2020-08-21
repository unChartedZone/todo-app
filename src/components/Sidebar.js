import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="sidebar mt-2">
      {/* <h1 className="h1">Sidebar</h1> */}
      <ul className="sidebar__list">
        {props.collections.map((list) => {
          return (
            <li key={list.id} className="body--1">
              {list.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

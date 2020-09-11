import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className="todos__item" key={todo.id}>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;

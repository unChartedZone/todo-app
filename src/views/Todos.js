import React from 'react';

import Sidebar from '../components/Sidebar';

const Todos = () => {
  let state = {
    todoInputText: '',
    collections: [
      {
        id: 1,
        name: 'Todo List',
      },
      {
        id: 2,
        name: 'Shopping List',
      },
    ],
    todos: [
      {
        id: 1,
        text: 'Buy Milk!',
        description: '',
        created: new Date().toDateString(),
      },
      {
        id: 2,
        text: 'Get food for Boots',
        description: '',
        created: new Date().toDateString(),
      },
      {
        id: 3,
        text: 'Take out the trash',
        description: '',
        created: new Date().toDateString(),
      },
    ],
  };

  const addTodo = (event) => {
    event.preventDefault();
    let todos = [...this.state.todos];
    let todoText = this.state.todoInputText;

    if (todoText === '') {
      return;
    }

    let id = todos.length + 1;

    todos.push({
      id,
      text: todoText,
      description: '',
      created: new Date().toDateString(),
    });

    // Update the list of todos, and clear the input field

    todoText = '';

    this.setState({
      todos,
      todoInputText: todoText,
    });
  };

  const handleChange = (event) => {
    let todoInputText = event.target.value;

    this.setState({
      todoInputText,
    });
  };

  let myStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
  };

  return (
    <div className="todos" style={myStyles}>
      <div className="todos__content container mx-4">
        <h1 className="h1">Todos</h1>
        <div className="text-field">
          <form className="text-field__form">
            <input
              type="text"
              placeholder="New Todo"
              className="text-field__input"
            />
            <button onClick={addTodo} className="text-field__action">
              +
            </button>
          </form>
        </div>
        <div className="todos__list">
          {state.todos.map((todo) => {
            return (
              <div className="todos__item" key={todo.id}>
                <p className="body--1">{todo.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todos;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Todos = (props) => {

  const [newTodo, setNewTodo] = useState('') 

  const [todos, setTodos ] = useState([
    { id: 1, title: 'Buy Milk!'}, 
    { id: 2, title: 'Feed Bootsie'},
    { id: 3, title: 'Take out the trash'},
  ])

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { 
        id: todos.length + 1,
        title: newTodo,
      }
    ])
    setNewTodo('')
  }

  return (
    <div className="todos">
      <div className="todos__content container mx-4">
        <h1 className="h1">Todos</h1>
        <div className="text-field">
          <form className="text-field__form">
            <input
              type="text"
              placeholder="New Todo"
              className="text-field__input"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo} className="text-field__action">
              +
            </button>
          </form>
        </div>
        <div className="todos__list">
          {todos.map((todo) => {
            return (
              <div className="todos__item" key={todo.id}>
                <p>{todo.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Todos;

import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Todo from '../components/Todo';

import todosReducer from '../reducers/todos';

const TodosList = (props) => {
  const collections = {
    1: { name: 'Task List', todosId: 1 },
    2: { name: 'Shopping List', todosId: 2 },
  };

  let { id } = useParams();
  const [newTodo, setNewTodo] = useState('');
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todosReducer, []);

  const mounted = () => {
    console.log('Mounted!');
  };

  useEffect(() => {
    console.log(`List changed to ${id}!`);
    if (id) {
      dispatch({
        type: 'POPULATE_TODOS',
        todos: [{ id: 1, title: 'Buy Milk', description: '' }],
      });
    }
  }, [id]);

  useEffect(mounted, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo === '') {
      console.log('Empty Todo!');
      return;
    }
    dispatch({
      type: 'ADD_TODO',
      title: newTodo,
      description: '',
    });
    setNewTodo('');
  };

  return (
    <div className="todos">
      <Sidebar collections={collections} />
      <div className="todos__content container mx-4">
        <h1 className="h1">{id ? collections[id].name : 'New List'}</h1>
        <div className="text-field mt-10">
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
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TodosList;

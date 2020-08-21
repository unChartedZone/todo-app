import React from 'react';

class Todos extends React.Component {
  state = {
    todoInputText: '',
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

  addTodo = (event) => {
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

  handleChange = (event) => {
    let todoInputText = event.target.value;

    this.setState({
      todoInputText,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-4 mx-auto">
          <h1 className="h1">Todos</h1>
          <div className="text-field">
            <form className="text-field__form">
              <input
                type="text"
                placeholder="New Todo"
                className="text-field__input"
                onChange={this.handleChange}
                value={this.state.todoInputText}
              />
              <button onClick={this.addTodo} className="text-field__action">
                +
              </button>
            </form>
          </div>
          <div className="todos__list">
            {this.state.todos.map((todo) => {
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
}

export default Todos;

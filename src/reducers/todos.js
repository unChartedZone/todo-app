const todosReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          description: action.description,
        },
      ];
    default:
      return state;
  }
};

export { todosReducer as default };

import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  archivedTodos: []
});

export default TodoContext;
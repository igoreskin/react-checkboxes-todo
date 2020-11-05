import { Types } from './types';

export default function reducer(state, action) {
  const { type, payload } = action;
  switch(type) {

    case Types.CREATE_TODO: 
      const addedTodos = [ ...state.todos, payload ];
      return { ...state, todos: addedTodos }

    case Types.ARCHIVE_TODO:
      const filteredAfterArchive = state.todos.filter(todo => todo.id !== payload.id);
      return { ...state, todos: filteredAfterArchive, archivedTodos: [ ...state.archivedTodos, payload] }

    case Types.DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== payload);
      return { ...state, todos: filteredTodos }

    case Types.DELETE_ARCHIVED_TODO:  
      const filteredArchivedTodos = state.archivedTodos.filter(todo => todo.id !== payload);
      return { ...state, archivedTodos: filteredArchivedTodos }

    default: 
      return state;
  }
}
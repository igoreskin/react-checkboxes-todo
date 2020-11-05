import React, { useState, useRef, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Types } from '../types';
import Todo from "./Todo";
import ArchivedTodo from './ArchivedTodo';
import TodoContext from '../context';

export const MainContainer = () => {

  const { state, dispatch } = useContext(TodoContext);

  const inputElement = useRef(null);

  const [todo, setTodo] = useState('');

  const archiveTodo = (id) => { 
    if (state.archivedTodos.length < 5) {
      const toArchive = state.todos.find(el => el.id === id);
      dispatch({ type: Types.ARCHIVE_TODO, payload: toArchive });
    }
  }

  const deleteTodo = (id) => {
    dispatch({ type: Types.DELETE_TODO, payload: id });
  }

  const deleteArchivedTodo = (id) => {
    dispatch({ type: Types.DELETE_ARCHIVED_TODO, payload: id });
  }

  const onInputChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = uuidv4();
    state.todos.length < 10 && todo.length > 0 && dispatch({ type: Types.CREATE_TODO, payload: { text: todo, id: id }});
    setTodo('');
    inputElement.current.focus();
  }

  const renderTodos = state.todos.map(
    todo => <Todo content={todo.text} id={todo.id} key={todo.id} archive={archiveTodo} delete={deleteTodo} />
  )

  const renderArchivedTodos = state.archivedTodos.map(
    todo => <ArchivedTodo content={todo.text} id={todo.id} key={todo.id} delete={deleteArchivedTodo} />
  )

  return (
    <div className="main-container">
      <h2>Todos</h2>
      <div className="todos">{renderTodos}</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input className="input" type="text" onChange={onInputChange} value={todo} ref={inputElement} maxLength="30" />
          <input className="submit" type="submit" value="Add Todo" />
        </form>
      </div>
      <h2>Archived Todos</h2>
      <div className="archived-todos">{renderArchivedTodos}</div>
    </div>
  )
}

export default MainContainer;

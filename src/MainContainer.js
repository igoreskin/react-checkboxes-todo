import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import ArchivedTodo from './ArchivedTodo';

export const MainContainer = () => {

  const inputElement = useRef(null);

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const [archivedTodos, setArchivedTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);

  const archiveTodo = (id) => { 
    if (archivedTodos.length < 5) {
      const toArchive = todos.find(el => el.id === id);
      const index = todos.indexOf(toArchive);
      todos.splice(index, 1)
      setArchivedTodos([ ...archivedTodos, toArchive ])
    }
  }

  const deleteTodo = (id) => {
    const toDelete = todos.find(el => el.id === id);
    const index = todos.indexOf(toDelete);
    todos.splice(index, 1)
    setDeletedTodos([...deletedTodos, toDelete])
  }

  const deleteArchivedTodo = (id) => {
    const toDelete = archivedTodos.find(el => el.id === id);
    const index = archivedTodos.indexOf(toDelete);
    archivedTodos.splice(index, 1)
    setDeletedTodos([...deletedTodos, toDelete])
  }

  const onInputChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = uuidv4();
    todos.length < 10 && todo.length > 0 && setTodos([ ...todos, { text: todo, id: id }]);
    setTodo('');
    inputElement.current.focus();
  }

  const renderTodos = todos.map(
    todo => <Todo content={todo.text} id={todo.id} key={todo.id} archive={archiveTodo} delete={deleteTodo} />
  )

  const renderArchivedTodos = archivedTodos.map(
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

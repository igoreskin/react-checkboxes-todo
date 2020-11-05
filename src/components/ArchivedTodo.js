import React from 'react';

export const ArchivedTodo = (props) => {

  const deleteTodo = () => {
    props.delete(props.id)
  }

  return (
    <div className="todo">
      <input type="checkbox" checked readOnly />
      <div className="plain">{props.content}</div>
      <button className="delete" onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default ArchivedTodo;
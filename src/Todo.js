import React, { useState } from 'react';

export const Todo = (props) => {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }

  const archiveTodo = () => {
    props.archive(props.id)
  }

  const deleteTodo = () => {
    props.delete(props.id)
  }

  return (
    <div className="todo">
      <input className="checkbox" type="checkbox" onChange={handleChange} />
      <div className={checked ? "linethrough" : "plain"}>{props.content}</div>
      <button className="archive" onClick={archiveTodo}>Archive</button>
      <button className="delete" onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;
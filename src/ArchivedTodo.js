import React, { useState } from 'react';

export const ArchivedTodo = (props) => {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }

  const deleteTodo = () => {
    // console.log(props)
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
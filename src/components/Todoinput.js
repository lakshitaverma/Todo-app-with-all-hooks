import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  const { handleAddTodo } = props;

  return (
    <TextField
      required
      id="outlined-required"
      label="Add new todo"
      variant="outlined"
      value={todoInput}
      style={{background: '#e0e0e0'}}
      onChange={e => {
        setTodoInput(e.target.value);
      }}
      onKeyDown={e => {
        if (e.key === "Enter") {
          handleAddTodo({ id: new Date().getTime(), value: todoInput });
          setTodoInput("");
        }
      }}
    />
  );
}

export default TodoInput;

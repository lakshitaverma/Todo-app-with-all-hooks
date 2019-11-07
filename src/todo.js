import React from "react";

export default function Todo(props) {
  const { id, value, handleRemoveItem } = props;
  return (
    <li key={id} className="todo">
      {value} <span onClick={() => handleRemoveItem(id)}>X</span>
    </li>
  );
}

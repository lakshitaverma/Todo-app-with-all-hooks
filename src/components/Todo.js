import React from "react";

import Button from '@material-ui/core/Button';

function Todo(props) {
  const { id, value, handleRemoveItem } = props;

  return (
    <tr key={id}>
      <td>{value}</td>
      <td>
        <Button
          variant="contained"
          onClick={() => handleRemoveItem(id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Todo;

import React, { useContext } from "react";
import Todo from "./Todo";
import TodoAppContext from './TodoAppContext';

function Todos(props) {
  const { todoList, handleRemoveItem } = props;
  const theme = useContext(TodoAppContext);

  return (
    <table align="center" className={theme.mode}>
      <tbody>
        {todoList.map(todo => (
          <Todo
            {...todo}
            handleRemoveItem={() => {
              handleRemoveItem(todo.id);
            }}
            key={todo.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Todos;

import React, { useReducer, useEffect, useState } from "react";

import TodoAppContext from './TodoAppContext';
import TodoInput from "./Todoinput";
import Todos from "./Todos";

import Button from '@material-ui/core/Button';

import reducer from '../reducer/index';
import {
  addTodo,
  removeTodo
} from '../actions/index';

function App() {
  const [showWelcomeMessage, triggerWelcomeMessage] = useState(true);
  const [themeMode, setThemeMode] = useState({ mode: "day" });
  const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")) || []);

  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      triggerWelcomeMessage(false);
    }, 4000);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    document.title = `${todos.length} Todos`;
    return () => {
      localStorage.removeItem("todos");
    };
  }, [todos]);

  const handleRemoveItem = id => {
    dispatch(removeTodo(id));
  };

  const handleAddTodo = todo => {
    dispatch(addTodo(todo));
  };

  return (
    <TodoAppContext.Provider value={themeMode}>
      <div className={"App " + themeMode.mode}>
        <h1>
          Todo App React Hooks{" "}
        </h1>
        <h2>
          Toggle Theme
          <Button
            variant="contained"
            onClick={() => {
              setThemeMode(
                themeMode.mode === "day" ? { mode: "night" } : { mode: "day" }
              );
            }}
          >
            {themeMode.mode === "day" ? "night" : "day"}s
          </Button>
        </h2>
        {showWelcomeMessage ? <h2>Welcome</h2> : null}
        <TodoInput handleAddTodo={handleAddTodo} />

        <Todos todoList={todos} handleRemoveItem={handleRemoveItem} />
      </div>
    </TodoAppContext.Provider>
  );
}

export default App;

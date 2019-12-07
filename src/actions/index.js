export const ADD_TODO = "add";
export const REMOVE_TODO = "remove";

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    value: id
  }
}

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    value: todo
  }
}

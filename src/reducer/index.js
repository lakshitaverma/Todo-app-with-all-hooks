import  {
  ADD_TODO,
  REMOVE_TODO
} from '../actions/index';

const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      if (state) {
        state = [...state, action.value];
      } else {
        state = [action.value];
      }

      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    case REMOVE_TODO:
      const newTodos = state.filter(todo => todo.id !== action.value);
      state = [...newTodos];

      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

export default reducer;

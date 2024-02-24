import axios from "axios";

export const increment = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};

export const fetchTodoSucess = (todos) => {
  return {
    type: "FETCH_TODO_SUCCESS",
    payload: todos,
  };
};

export const fetchTodoFailure = (error) => {
  return {
    type: "FETCH_TODO_FAILURE",
    payload: error,
  };
};

export const fetchTodos = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3002/todos")
      .then((response) => {
        dispatch(fetchTodoSucess(response.data));

      })
      .catch((error) => {
        dispatch(fetchTodoFailure(error.message));
      });
  };
};

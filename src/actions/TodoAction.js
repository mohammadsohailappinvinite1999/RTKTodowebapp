import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const DeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (updatedData) => {
  return {
    type: UPDATE_TODO,
    payload: updatedData,
  };
};

export const asyncDeleteTodo = (id) => (dispatch) => {
  setTimeout(() => {
    dispatch(DeleteTodo(id));
  }, 3000);
};

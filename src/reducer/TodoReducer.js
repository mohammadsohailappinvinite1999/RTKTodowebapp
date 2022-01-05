import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.payload);
    case UPDATE_TODO:
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

    default:
      return state;
  }
}

export const getTodoState = (state) => state.todo;

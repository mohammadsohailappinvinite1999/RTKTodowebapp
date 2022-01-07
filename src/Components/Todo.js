import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  deleteTodoAsynchronously,
  updateTodo as rtkupdateTodo,
} from "../Features/TodoSlice";
const Todo = ({ todo, completed, Tododata }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    //RTK Action
    dispatch(deleteTodo(Tododata.id));
  };

  const onUpdateHandler = (data) => {
    //Rtk Action
    dispatch(rtkupdateTodo(data));
  };

  const onAsyncDelete = () => {
    //RTK Action
    dispatch(deleteTodoAsynchronously(Tododata.id));
  };

  return (
    <div>
      <h4 style={{ textDecoration: completed ? "line-through" : "none" }}>
        {todo}
      </h4>
      <input
        onChange={() => {
          onUpdateHandler({ ...Tododata, completed: !completed });
        }}
        type="checkbox"
        checked={completed}
      />
      <button onClick={onDeleteHandler}>delete</button>
      <button onClick={onAsyncDelete}> Delete Asynchronously</button>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getTodoState } from "../reducer/TodoReducer";
import { addTodo } from "../actions/TodoAction";
import Todo from "../Components/Todo";
import { createTodo } from "../Features/TodoSlice";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");

  const todoState = useSelector(getTodoState);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const createHandler = (e) => {
    //redux pure
    // dispatch(
    //   addTodo({
    //     todo,
    //     completed: false,
    //     id: v4(),
    //   })
    // );

    //reduxRtk
    dispatch(
      createTodo({
        todo,
        completed: false,
        id: v4(),
      })
    );
    setTodo("");
  };

  return (
    <>
      <input type="text" value={todo} onChange={onChangeHandler} />
      <button onClick={createHandler} disabled={!todo}>
        Create
      </button>
      <div>
        {todoState.length ? (
          todoState.map((el) => {
            return (
              <Todo
                completed={el.completed}
                key={el.id}
                Tododata={el}
                todo={el.todo}
              />
            );
          })
        ) : (
          <h1>No Todo Present</h1>
        )}
      </div>
    </>
  );
};

export default TodoScreen;

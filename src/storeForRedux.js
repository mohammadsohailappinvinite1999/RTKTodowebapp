import { createStore, combineReducers, applyMiddleware } from "redux";
import TodoReducer from "./reducer/TodoReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const globalReducer = combineReducers({
  todo: TodoReducer,
});

export const storeByRedux = createStore(
  globalReducer,
  {
    todo: [{ todo: "preloaded State", completed: false, id: "213213112" }],
  },
  composeWithDevTools(applyMiddleware(thunk, logger))
);

import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Features/TodoSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const storeRTK = configureStore({
  reducer: {
    todo: TodoSlice,
  },
  devTools: true,
  preloadedState: {
    todo: [{ todo: "preloaded State", completed: false, id: "213213112" }],
  },
  middleware: (getdefaults) => getdefaults().concat(logger),
});

import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Features/TodoSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { TodosApi } from "./service/TodoApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const storeRTK = configureStore({
  reducer: {
    todo: TodoSlice,
    [TodosApi.reducerPath]: TodosApi.reducer,
  },
  preloadedState: {
    todo: [{ todo: "preloaded State", completed: false, id: "213213112" }],
  },
  middleware: (getdefaults) => getdefaults().concat(TodosApi.middleware),
});

setupListeners(storeRTK.dispatch);

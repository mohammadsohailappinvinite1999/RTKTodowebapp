import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { storeByRedux } from "./storeForRedux";
import { storeRTK } from "./storeForRTK";

ReactDOM.render(
  <>
    {/* <Provider store={storeByRedux}>
      <App />
    </Provider> */}

    <Provider store={storeRTK}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

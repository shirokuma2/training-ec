import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reduccks/store/store";
// import * as serviceWorker from "./serviceWorker"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// createStoreを実行してstate状態を生成
export const store = createStore();

ReactDOM.render(
  // Provider でラップすると内部でstoreを参照できるようになる
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

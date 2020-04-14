import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/index";
import "antd/dist/antd.css";
import App from "./page/App";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();

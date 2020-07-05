import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {CallBack} from "./CallBack"
// import New from "./New";

import App from "./App";
// import Checking from "./check.js";

// import workers from "./App";/
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <CallBack />
    
    {/* <New /> */}   
    {/* <Work /> */}
    {/* <Checking /> */}
    {/* <Checking /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import Home from "./pages/home";
import Anas from "./pages/anas";
import Prince from "./pages/prince";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/anas" exact component={Anas} />
        <Route path="/prince" exact component={Prince} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

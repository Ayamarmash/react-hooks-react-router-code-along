import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "./Copmonents/Home";
import About from "./Copmonents/About";
import Login from "./Copmonents/Login";
import SignUp from "./Copmonents/SignUp";
import NavBar from "./Copmonents/NavBar";
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signUp">
        <SignUp/>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
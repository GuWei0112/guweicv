import React from "react";
import "./App.css";
import Header from "./components/header/Header.components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Header />
        </Switch>
        <h1>I'm Zach</h1>
        <p>a programmer.</p>
      </div>
    </BrowserRouter>
  );
}

export default App;

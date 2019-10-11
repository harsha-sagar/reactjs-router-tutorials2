import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import FormInput from './components/FormInput'

export default function PreventingTransitionsExample() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact children={ <FormInput /> } />
        <Route path="/home" children={ <Home />} />
        <Route path="/about" children={ <About />} />
      </Switch>
    </BrowserRouter>
  );
}

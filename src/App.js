import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import CustomLink from './components/CustomLink'

export default function CustomLinkExample() {
  return (
    <BrowserRouter>
      <div>
        <CustomLink activeOnlyWhenExact={true} to="/" label="Home"/>
        <CustomLink to="/about" label="About" />
        {
          /*
            Upon routing, the contents of Router are re-rendered, except for Switch component
            Switch component renders one the route children, whose path matching with routed URL.
          */
        }
        <br />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

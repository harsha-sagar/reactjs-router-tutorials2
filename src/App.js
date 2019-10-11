import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import UserInfo from './components/UserInfo'

import PublicPage from './components/PublicPage'
import LoginPage from './components/LoginPage'

import ProtectedPage from './components/ProtectedPage'
import PrivateRoute from './components/PrivateRoute'

const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  logout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default function App() {

  return (
    <BrowserRouter>
      <div>
        <UserInfo fakeAuth={ fakeAuth }/>

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage fakeAuth={ fakeAuth } />
          </Route>
          <PrivateRoute path="/protected" fakeAuth={ fakeAuth } >
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

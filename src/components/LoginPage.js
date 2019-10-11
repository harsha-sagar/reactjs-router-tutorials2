import React from 'react'

import { useLocation, useHistory } from 'react-router-dom'

export default function LoginPage({ fakeAuth }) {
  let location = useLocation();
  let history = useHistory();

  const login = () => {
    fakeAuth.login( () => {
      history.replace(location.state.from)
    })
  }

  return (
    <div>
      <span>Need to login to access { location.state.from.pathname } </span>      
      <button onClick = { login }>Login</button>
    </div>
  );
}

import React from 'react'

import { useHistory } from "react-router-dom";

export default function UserInfo({ fakeAuth }) {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? 
    (
      <div>
        <span>Welcome...</span>
        <button onClick={ () => (fakeAuth.logout(() => history.push('/')))}>logout</button>
      </div>
    )
    :
    (<p>Please login in</p>)
}

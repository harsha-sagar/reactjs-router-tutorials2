import React from 'react'

import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ fakeAuth, children, ...rest }) {
  return (
    <Route
      { ...rest }
      render = {
        ({ location }) => {
          if (fakeAuth.isAuthenticated) {
            return children
          } else {
            return <Redirect to={ { pathname: '/login', state: { from: location } }}/>
          }
        }
      }
    />
  )
}

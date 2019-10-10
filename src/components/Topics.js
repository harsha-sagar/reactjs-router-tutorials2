import React from 'react'
import { Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'

import Topic from './Topic'

export default function Topics() {
  
  const routeInfo = useRouteMatch();
  const paramsInfo = useParams();

  return (
      <div>

        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={ `${routeInfo.url}/topic1` }>Topic-1</Link>
          </li>
          <li>
            <Link to={ `${routeInfo.url}/topic2` }>Topic-2</Link>
          </li>
        </ul>

        <Switch>
          <Route path={ `${routeInfo.path}/:topicId` }>
            <Topic />
          </Route>
          <Route path={ `${routeInfo.path}` }>
            <h3>select a topic</h3>
          </Route>
        </Switch>

      </div>
  )
}


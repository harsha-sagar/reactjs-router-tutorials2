import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

export default function App() {
  return (
    <BrowserRouter>
      <div>

        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>
          <li>
            <Link to='/topics' >Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

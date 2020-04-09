import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Login />
      {/* <div className="links">
        <nav>
          <NavLink
            exact
            to={'/'}
            activeClassName={"active"}
          >
            Home
            </NavLink>
          <NavLink
            exact
            to={'/experiences'}
            activeClassName={"active"}
          >
            Experiences
          </NavLink>
          <NavLink
            exact
            to={'/userprofile'}
            activeClassName={"active"}
          >
            User Profile
          </NavLink>
          <NavLink
            exact
            to={'/teleporter'}
            activeClassName={"active"}
          >
            Teleporter
          </NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/"/>
          <Route path="/experiences" />
          <Route path="/userprofile" />
          <Route path="//teleporter" />
        </Switch>
      </main> */}
    </div>
  )
}

export default App;


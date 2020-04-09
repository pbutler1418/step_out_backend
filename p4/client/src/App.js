import React from 'react';
import './App.css';
import Teleporter from './components/screens/teleporter'
import UserProfile from './components/screens/UserProfile'
import Experiences from './components/screens/Experiences'

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
      <div className="links">
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
        <h1>Stepping Out Your Door</h1>
        </div>
    </div>
      <main>
        <Switch>
          <Route exact path="/"/>
          <Route path="/experiences" component={Experiences}/>
          <Route path="/userprofile" component={UserProfile}/>
          <Route path="/teleporter" component={Teleporter} />
        </Switch>
    </main>
    </>
  )
}

export default App;


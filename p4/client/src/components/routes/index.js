import React from "react"
import { Route, Switch } from "react-router-dom"
import Landing from "../screens/Landing"
import SignIn from "../screens/SignIn"
import Register from "../screens/Register"
import Home from "../screens/Home"
import AuthenticatedRoute from "./AuthenticatedRoute"

const Routes = ({
  user,
  items,
  setUser,
  clearUser,
}) => (
    <Switch>
      <Route
        exact
        path="/"
        render={props =>
          user ? (
            <Home {...props} />
          ) : (
              <Landing {...props} />
            )
        }
      />
      <Route
        path="/sign-in"
        render={props => <SignIn {...props} setUser={setUser} />}
      />
      <Route exact path="/sign-up" render={(props) => (
          <Register
          handleRegister={this.handleRegister}
          handleChange={this.authHandleChange}
          formData={this.state.authFormData} />)} />
      {/* <AuthenticatedRoute
        exact
        to={'/'}
        activeClassName={"active"}
      >
        Home
            </AuthenticatedRoute>
      <AuthenticatedRoute
        exact
        to={'/experiences'}
        activeClassName={"active"}
      >
        Experiences
          </AuthenticatedRoute>
      <AuthenticatedRoute
        exact
        to={'/userprofile'}
        activeClassName={"active"}
      >
        User Profile
          </AuthenticatedRoute>
      <AuthenticatedRoute
        exact
        to={'/teleporter'}
        activeClassName={"active"}
      >
        Teleporter
          </AuthenticatedRoute> */}
    </Switch>
  )

export default Routes

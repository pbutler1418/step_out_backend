import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from "react-router-dom"
// import Landing from "./Landing"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import AuthenticatedRoute from "../routes/AuthenticatedRoute"
import Teleporter from './teleporter'
import UserProfile from './UserProfile'
import Experiences from './Experiences'


import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from '../services/api-help';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      authFormData: {
        name: "",
        email: "",
        password: ""
      }
    }
  }
  handleLoginButton = () => {
    this.props.push("/login")
  }
  componentDidMount = () => {
    this.handleVerify();
  }

  handleLogin = async () => {
    const currentUser = await loginUser({
      name: this.state.authFormData.name,
      email: this.state.authFormData.email,
      password: this.state.authFormData.password
    });
    this.setState({ currentUser })
    this.props.history.push("/")
  }
  // Function to register a user
  // we set the user data in state.
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
    this.props.history.push("/")
  }

  // =========================================================================================
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  // Function to logout user
  // We delete the token from local storage
  // set the current user in state back to null
  // and call our remove token function to remove
  // the auth headers from our api call
  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  // Handle change function for the auth forms
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  // ====================================
  // ============= Render ===============
  // ====================================
  render() {
    return (
      <>
        <div className="App">
          <div className="links">
            <nav>
            <NavLink
                exact
                to={'/sign-in'}
                activeClassName={"active"}
              >
                Sign In
          </NavLink>
              <NavLink
                exact
                to={'/sign-up'}
                activeClassName={"active"}
              >
                Sign up
          </NavLink>
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
          <button onClick={this.handleLogout}>logout</button>
            </nav>
            <h1>Stepping Out Your Door</h1>
          </div>
          <main>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/sign-in" render={() => (
                <SignIn
                  authFormData={this.state.authFormData}
                  handleLogin={this.handleLogin}
                  handleChange={this.handleChange}
                />
              )} />
              <Route exact path="/sign-up" render={() => (
                <SignUp
                  authFormData={this.state.authFormData}
                  handleRegister={this.handleRegister}
                  handleChange={this.handleChange}
                />
              )} />
              <Route path="/experiences" component={Experiences} />
              <Route exact path="/userprofile" render={() => (
                <UserProfile
                  authFormData={this.state.authFormData}
                  handleChange={this.handleChange}
                />
              )} />
              <Route path="/teleporter" component={Teleporter} />
            </Switch>
          </main>
        </div>
      </>
    )
  }
}

export default withRouter(Home)

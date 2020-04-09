import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div>
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="email" type="text" />
        <input name="password" type="password" />
        <button>Login</button>
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
}

export default Login;

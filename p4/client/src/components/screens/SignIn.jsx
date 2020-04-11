import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const SignIn = (props) => {

  return (
    <div>
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="email" type="text" value={props.authFormData.email} onChange={props.handleChange} />
        <input name="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />
        <button>Login</button>
        <Link to="/register">Sign In</Link>
      </form>
    </div>
  );
}

export default SignIn;

import React from 'react';
// import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const SignIn = (props) => {

  return (
    <div className = "StartUp">
      <h2>Sign In</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} className = "StartUp">
        <input name="email" type="text" value={props.authFormData.email} onChange={props.handleChange} />
        <input name="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

import React, { Component } from 'react'
import api from "../services/api-help"
import { Link } from 'react-router-dom'


const SignUp = (props) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
      <input name="name" placeholder="name"type="text" value={props.authFormData.name} onChange={props.handleChange} />
        <input name="email" placeholder="email" type="text" value={props.authFormData.email} onChange={props.handleChange} />
        <input name="password" placeholder="password" type="password" value={props.authFormData.password} onChange={props.handleChange} />
        <button>SignUp</button>
      </form>
    </div>
  ) }


export default SignUp
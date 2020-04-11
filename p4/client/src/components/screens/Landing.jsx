import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => (
  <div className='landing'>
    <h1>Stepping Out Your Door</h1>
    <div className="links">
      <Link to="/sign-in">
        <button>
          Sign In
          </button>
      </Link>

      <Link to="/sign-up">
        <button>Sign Up </button>
      </Link>
    </div>
  </div>
)

export default Landing
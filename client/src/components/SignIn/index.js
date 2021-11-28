import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.scss'

const SignIn = () => {
  const history = useNavigate()
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="signin__container">
      <section className="signin__container-header">
        <h1>Sign In</h1>
      </section>
      <section className="signin__container-main">
        <form className="signin__container-main-form">
          <label htmlFor="name">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="name"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </label>
          <div className="signin__container-main-form-button">
            <button>Sign In</button>
          </div>
        </form>
      </section>
      <section className="signin__container-footer">
        <p className="signin__container-footer-context">
          <span className="signin__container-footer-context-text">
            First time here?
          </span>
          <span
            className="signin__container-footer-context-link"
            onClick={() => history('/auth/sign-up')}
          >
            {' '}
            Sign Up
          </span>
        </p>
      </section>
    </div>
  )
}

export default SignIn

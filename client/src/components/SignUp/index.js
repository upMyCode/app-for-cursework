import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './SignUp.scss'

const SignUp = () => {
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="signup__container">
      <section className="signup__container-header">
        <h1>Sign Up</h1>
      </section>
      <section className="signup__container-main">
        <form className="signup__container-main-form">
          <label htmlFor="name">
            <p>Username</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="name"
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
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
          <label htmlFor="confirm-password">
            <p>Confirm Password</p>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirm-password"
            />
            <div className="signup__container-main-form-button">
              <button>Sign In</button>
            </div>
          </label>
        </form>
      </section>
      <section className="signup__container-footer">
        <p className="signin__container-footer-context">
          <span
            className="signup__container-footer-context-link"
            onClick={() => history('/auth/sign-in')}
          >
            {' '}
            <ArrowBackIcon />
            Sign In
          </span>
        </p>
      </section>
    </div>
  )
}

export default SignUp

import React, { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hooks'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import './SignUp.scss'

const SignUp = () => {
  const { loading, error, request } = useHttp()
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerHandler = async () => {
    try {
      const data = await request(
        'http://localhost:5000/auth/sign-up',
        'POST',
        {
          email: email,
          password: password,
          username: username,
        },
        {
          'Content-Type': 'application/json;charset=utf-8',
        }
      )
    } catch (e) {}
  }
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
          <div className="signup__container-main-form-button">
            <button onClick={registerHandler} disabled={loading}>
              Sign Up
            </button>
          </div>
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
            Sign Up
          </span>
        </p>
      </section>
    </div>
  )
}

export default SignUp

import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hooks'
import { AuthContext } from '../../context/AuthContext'
import { useStoreStocks } from '../../hooks/stocks.storage.hook'
import './SignIn.scss'

const SignIn = () => {
  const {
    token,
    login,
    logout,
    userId,
    alertSwitcher,
    setAlertSwitcher,
    context,
    setContext,
    setMessageColor,
    isAuthenticated,
  } = useContext(AuthContext)
  const { loading, error, request, authorized, isAuthorized, clearError } =
    useHttp()
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authHandler = async () => {
    try {
      const data = await request(
        'http://localhost:5000/auth/sign-in',
        'POST',
        {
          email: email,
          password: password,
        },
        {
          'Content-Type': 'application/json;charset=utf-8',
        }
      )
      login(data.token, data.userId)
    } catch (e) {}
  }

  useEffect(() => {
    if (error) {
      setAlertSwitcher(true)
      setContext(error)
      setMessageColor('error')
      clearError()
    }
  }, [error, clearError])

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
            <button onClick={authHandler} disabled={loading}>
              Sign In
            </button>
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

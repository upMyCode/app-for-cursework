import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignIn from '../SignIn'
import './Auth.scss'

const Auth = () => {
  const history = useNavigate()
  return <SignIn />
}

export default Auth

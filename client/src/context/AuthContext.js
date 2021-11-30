import { createContext } from 'react'

function zeroContent() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: zeroContent,
  logout: zeroContent,
  isAuthenticated: false,
})

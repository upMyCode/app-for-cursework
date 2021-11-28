import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../src/components/pages/AuthPage'
import StockView from '../src/components/modules/StockView'
import SignInPage from '../src/components/pages/SignInPage'
import SignUpPage from '../src/components/pages/SignUpPage'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<StockView />} exact />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path={'/auth' | '/'} element={<AuthPage />} />
      <Route path="/auth/sign-in" element={<SignInPage />} />
      <Route path="/auth/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default useRoutes

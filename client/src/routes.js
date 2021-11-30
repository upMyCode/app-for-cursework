import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AuthPage from '../src/components/pages/AuthPage'
import StockView from '../src/components/modules/StockView'
import SignInPage from '../src/components/pages/SignInPage'
import SignUpPage from '../src/components/pages/SignUpPage'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<StockView />} />
        <Route path="/auth/sign-in" element={<Navigate to="/" />} />
        <Route path="/auth/sign-up" element={<Navigate to="/" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path={'/auth/sign-in' | '/'} element={<AuthPage />} />
      <Route path="/auth/sign-in" element={<SignInPage />} />
      <Route path="/auth/sign-up" element={<SignUpPage />} />
    </Routes>
  )
}

export default useRoutes

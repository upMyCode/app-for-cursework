import React, { useState, useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useHttp = () => {
  const {
    token,
    login,
    logout,
    userId,
    isAuthenticated,
    setErrorsText,
    setAlertSwitcher,
    alertSwitcher,
    setErrorMessage,
  } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
          setError(data.message)
          throw new Error(data.message || 'We have some problem')
        }

        setLoading(false)

        return data
      } catch (e) {
        setLoading(false)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => setError(''), [])

  return { loading, request, error, clearError }
}

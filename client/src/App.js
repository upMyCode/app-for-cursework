import useRoutes from './routes'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../src/components/pages/AuthPage'
import { useHttp } from '../src/hooks/http.hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from '../src/context/AuthContext'
import { useAuth } from '../src/hooks/auth.hook'
import AlertComponent from '../src/components/AlertComponent'
import { useStoreStocks } from '../src/hooks/stocks.storage.hook'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [alertSwitcher, setAlertSwitcher] = useState(false)
  const [priceStocksText, setPriceStocksText] = useState('')
  const [valueStocksText, setValueStocksText] = useState('')
  const [tickerName, setTickerName] = useState('')
  const [context, setContext] = useState('')
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      setAlertSwitcher(true)
      setContext('Вы авторизированы')
    }
    if (priceStocksText && valueStocksText && tickerName && isAuthenticated) {
      setAlertSwitcher(true)
      setContext(
        `Вы приобрели ${tickerName} в количестве ${valueStocksText} по цене $ ${priceStocksText}`
      )
    }
  }, [priceStocksText, isAuthenticated])

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
        alertSwitcher,
        setAlertSwitcher,
        setContext,
        context,
        setPriceStocksText,
        setValueStocksText,
        setTickerName,
        isAuthenticated,
      }}
    >
      <Router>
        <div className="wrapper">
          <div className="wrapper__container">
            {alertSwitcher ? <AlertComponent context={context} /> : ''}
            {routes}
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

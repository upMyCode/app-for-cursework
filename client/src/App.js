import useRoutes from './routes'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../src/components/pages/AuthPage'
import { useHttp } from '../src/hooks/http.hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from '../src/context/AuthContext'
import { useAuth } from '../src/hooks/auth.hook'

const App = () => {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <Router>
        <div className="wrapper">{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

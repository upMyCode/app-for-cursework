import useRoutes from './routes'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../src/components/pages/AuthPage'

const App = () => {
  const routes = useRoutes(true)
  return <div className="wrapper">{routes}</div>
}

export default App

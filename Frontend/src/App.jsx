import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Layout from './Layout.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import Dashboard from './pages/dashboard.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/user/dashboard/:username" element={<Dashboard />} />
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App

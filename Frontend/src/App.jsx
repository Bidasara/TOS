import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Layout from './Layout.jsx'
import PricePage from './pages/price.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import Dashboard from './pages/dashboard.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'
import { ProblemProvider } from './contexts/ProblemContext.jsx'
import { SpriteAnimationProvider } from './contexts/SpriteAnimationContext.jsx'
import { BreakAnimationProvider } from './contexts/BreakAnimationContext.jsx'
import CheckoutPage from './pages/checkout.jsx'
import BrowsePage from './pages/browse.jsx'

function App() {
  return (
    <div className='h-screen w-screen'>
    <NotificationProvider>
    <ThemeProvider>
    <SpriteAnimationProvider>
      <BreakAnimationProvider>
      <Router>
        <AuthProvider>
          <ProblemProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/user/:username" element={<Dashboard />} />
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<PricePage />} />
              <Route path='/checkout' element={<CheckoutPage/>}/>
              <Route path='/library' element={<BrowsePage/>}/>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          </ProblemProvider>
        </AuthProvider>
      </Router>
      </BreakAnimationProvider>
    </SpriteAnimationProvider>
    </ThemeProvider>
    </NotificationProvider>
    </div>
  )
}

export default App

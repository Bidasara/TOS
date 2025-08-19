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
import MilestonesPage from './pages/milestone.jsx'
import ResetPassword from './pages/resetPassword.jsx'
import GetEmail from './pages/getEmail.jsx'
import { NoteModalProvider } from './contexts/NoteModalContext.jsx'
import { ModalProvider } from './contexts/ModalContext.jsx'
import { ScrollProvider } from './contexts/ScrollContext.jsx'
import Homepage from './pages/HomePage.jsx'

function App() {
  return (
    <div className='h-screen w-screen'>
      <NotificationProvider>
        <ThemeProvider>
          <SpriteAnimationProvider>
            <BreakAnimationProvider>
              <Router>
                <ScrollProvider>
                  <AuthProvider>
                    <NoteModalProvider>
                      <ModalProvider>
                        <ProblemProvider>
                          <Routes>
                            <Route element={<Layout />}>
                              <Route path="/user/:username" element={<Dashboard />} />
                              <Route path='/' element={<Home />} />
                              <Route path='/shop' element={<PricePage />} />
                              <Route path='/checkout' element={<CheckoutPage />} />
                              <Route path='/library' element={<BrowsePage />} />
                              <Route path='/milestones' element={<MilestonesPage />} />
                            </Route>
                            <Route path='/home' element={<Homepage/>}/>
                            <Route path='/login' element={<Login />} />
                            <Route path='/getEmail' element={<GetEmail />} />
                            <Route path='/resetPass' element={<ResetPassword />} />
                            <Route path='/register' element={<Register />} />
                          </Routes>
                        </ProblemProvider>
                      </ModalProvider>
                    </NoteModalProvider>
                  </AuthProvider>
                </ScrollProvider>
              </Router>
            </BreakAnimationProvider>
          </SpriteAnimationProvider>
        </ThemeProvider>
      </NotificationProvider>
    </div>
  )
}

export default App

import { useState, useRef, useEffect } from 'react';
import logo from '../assets/image.png';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import api from "../api";
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken, username, setUsername, avatarLink, setAvatarLink, loading,logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const { theme } = useTheme();

  const login = () => navigate('/login');
  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
    console.log(`accessToken: ${accessToken}`);
  }, []);

  return (
    <nav className={`w-full flex items-center justify-between px-6 py-3 shadow-md transition-all duration-300
      ${theme === 'cyberpunk' ? 'bg-black cyberpunk-bg neon-text border-b-2 border-pink-500' : 'bg-white dark:bg-gray-900'}`}>
      {/* Left - Logo */}
      <div className="flex items-center gap-3 h-9/12">
        <img src={logo} alt="Logo" className='h-11' />
        <span className={`text-xl font-bold tracking-tight ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-900 dark:text-white'}`}>CodeTracker</span>
      </div>

      {/* Right - Nav + Avatar */}
      <div className="flex items-center gap-6 relative" ref={dropdownRef}>
        {/* Authenticated User Dropdown */}
        {loading ?
          (<></>) : accessToken!=null ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-yellow-200 font-black hover:text-yellow-400 dark:text-red-500 dark:hover:text-red-400" : "text-white/90 font-medium hover:text-white dark:text-gray-300 dark:hover:text-white"} transition-colors ${theme === 'cyberpunk' ? 'text-pink-400 neon-text hover:text-cyan-400' : ''}`
                }>
                Home
              </NavLink>
              <button className="text-sm text-white/90 hover:text-white transition-colors font-medium dark:text-gray-300 dark:hover:text-white">Dashboard</button>
              <button className="text-sm text-white/90 hover:text-white transition-colors font-medium dark:text-gray-300 dark:hover:text-white">My Lists</button>
              <button className="text-sm text-white/90 hover:text-white transition-colors font-medium dark:text-gray-300 dark:hover:text-white">Stats</button>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className="flex items-center gap-2 focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none
"
                >
                  <img src={avatarLink} alt="Avatar" className="h-10 w-10 rounded-full" />
                  <span className="text-sm">▼</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-black dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg z-50 p-4 flex flex-col items-center animate-fadeIn">
                    <img src={avatarLink} alt="Avatar" className="w-25 h-25 rounded-full" />
                    <div className="font-semibold text-lg mb-6">{username}</div>
                    <button
                      onClick={logout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              className={`ml-4 px-5 py-1.5 bg-white/90 text-indigo-600 rounded-lg font-medium text-sm 
            hover:bg-white transition-all shadow-sm ${theme === 'cyberpunk' ? 'bg-indigo-500 dark:bg-indigo-400 dark:text-white' : ''}`}
              onClick={login}
            >
              Sign In / Log In
            </button>
          )}
      </div>
    </nav>
  );
};

export default Navbar;

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
        <span className={`text-xl font-bold tracking-tight ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-900 dark:text-white'}`}>NERDY</span>
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
                  `text-base px-4 py-2 rounded-lg transition-colors font-semibold ${isActive ? "bg-indigo-600 text-white dark:bg-pink-600 dark:text-white" : "text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700"} ${theme === 'cyberpunk' ? 'text-pink-400 neon-text hover:text-cyan-400' : ''}`
                }>
                Home
              </NavLink>
              <div className="relative ml-2">
                <button
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-500 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <img src={avatarLink} alt="Avatar" className="h-9 w-9 rounded-full border-2 border-indigo-400 dark:border-pink-400 shadow" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">▼</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white text-black dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl z-50 p-4 flex flex-col items-center animate-fadeIn border border-indigo-200 dark:border-pink-400">
                    <img src={avatarLink} alt="Avatar" className="w-20 h-20 rounded-full border-2 border-indigo-400 dark:border-pink-400 mb-2" />
                    <div className="font-semibold text-lg mb-4 text-center">{username}</div>
                    <button
                      onClick={logout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition shadow"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              className={`ml-4 px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-base hover:bg-indigo-700 transition-all shadow-sm ${theme === 'cyberpunk' ? 'bg-pink-500 dark:bg-pink-400 dark:text-white' : ''}`}
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

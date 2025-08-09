import { useState, useRef, useEffect } from 'react';
import logo from '../assets/image.png';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import api from "../api";
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate(); 
  const { accessToken, setAccessToken, username, setUsername, avatarLink, setAvatarLink, loading, logout } = useAuth();
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
  }, []);

  return (
    <nav className={`w-full h-1/10 flex justify-between relative  px-6 shadow-md transition-all duration-300
      ${theme === 'tos' ? 'tos border-b-2 tos-border' : theme === 'cyberpunk' ? 'bg-black cyberpunk-bg neon-text border-b-2 border-pink-500' : 'bg-gray-300 dark:bg-gray-900'}`}>
      {/* Left - Logo */}
      <div className="content-center h-full">
        <img title='Tech of Success' src={logo} style={{ imageRendering: 'pixelated' }} alt="Logo" className={`object-cover ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`} onClick={() => navigate("/")} />
      </div>
      {/* Right - Nav + Avatar */}
      <div className={`flex items-center gap-6 relative ${theme === 'tos' ? 'tos-theme-mono' : ''}`} ref={dropdownRef}>
        {/* Authenticated User Dropdown */}
        {loading ?
          (<></>) : accessToken != null ? (
            <>
              {/* Shop Link */}
              <button onClick={() => navigate("/shop")} className={theme === 'tos' ? 'tos-accent cursor-pointer' : 'cursor-pointer focus:outline-none'}>Shop</button>
              <button onClick={()=> navigate('/library')} className='rounded-lg'>Library</button>
              <button onClick={()=> navigate(`/user/${username}`)} className="cursor-pointer">Dashboard</button>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-1/3' viewBox="0 0 24 24" fill="yellow" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <div className="relative ml-2">
                <button
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className={`flex items-center cursor-pointer gap-2 focus:outline-none px-2 py-1 rounded-lg transition-all ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <img src={avatarLink} alt="Avatar" className={`h-9 w-9 rounded-full border-2 ${theme === 'tos' ? 'tos-border' : 'border-indigo-400 dark:border-pink-400'} shadow`} />
                  <span className={`text-xs ${theme === 'tos' ? 'tos-accent' : 'text-gray-600 dark:text-gray-300'}`}>▼</span>
                </button>
                {dropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-xl z-50 p-4 flex flex-col items-center animate-fadeIn border ${theme === 'tos' ? 'tos tos-border' : 'bg-white text-black dark:bg-gray-800 dark:text-white border-indigo-200 dark:border-pink-400'}`}>
                    <img src={avatarLink} alt="Avatar" className={`w-20 h-20 rounded-full border-2 mb-2 ${theme === 'tos' ? 'tos-border' : 'border-indigo-400 dark:border-pink-400'}`} />
                    <div className={`font-semibold text-lg mb-4 text-center ${theme === 'tos' ? 'tos-accent' : ''}`}>{username}</div>
                    <button
                      onClick={logout}
                      className={`w-full py-2 cursor-pointer rounded-lg font-medium transition shadow ${theme === 'tos' ? 'tos-border tos-accent' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              className={`ml-4 px-5 py-2 rounded-lg font-semibold text-base transition-all cursor-pointer shadow-sm ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono' : 'bg-indigo-600 text-white hover:bg-indigo-700'} ${theme === 'cyberpunk' ? 'bg-pink-500 dark:bg-pink-400 dark:text-white' : ''}`}
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

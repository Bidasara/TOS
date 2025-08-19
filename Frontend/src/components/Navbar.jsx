import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useTheme } from '../contexts/ThemeContext';

const LOGO_URL = "https://res.cloudinary.com/harshitbd/image/upload/v1755084646/ReviseCoder_mt5fzc.png";

// --- Helper Functions & Sub-components ---

/**
 * Generates the appropriate TailwindCSS classes for the navbar based on the theme.
 * @param {string} theme - The current theme ('tos', 'cyberpunk', etc.).
 * @returns {string} A string of CSS classes.
 */
const getNavClasses = (theme) => {
  const base = 'w-full shrink-0 h-1/10 flex justify-between relative px-6 shadow-md transition-all duration-300';
  const themeStyles = {
    tos: 'tos border-b-2 tos-border',
    cyberpunk: 'bg-black cyberpunk-bg neon-text border-b-2 border-pink-500',
    default: 'bg-gray-300 dark:bg-gray-900'
  };
  return `${base} ${themeStyles[theme] || themeStyles.default}`;
};

/**
 * Renders the login/signup button for guest users.
 */
const LoginButton = ({ theme, onLogin }) => {
  const base = 'ml-4 px-5 py-2 rounded-lg font-semibold text-base transition-all cursor-pointer shadow-sm';
  const themeStyles = {
    tos: 'tos-border tos-accent tos-theme-mono',
    cyberpunk: 'bg-pink-500 dark:bg-pink-400 dark:text-white',
    default: 'bg-indigo-600 text-white hover:bg-indigo-700'
  };
  const finalClasses = `${base} ${themeStyles[theme] || themeStyles.default}`;

  return (
    <button className={finalClasses} onClick={onLogin}>
      Sign In / Log In
    </button>
  );
};

/**
 * Renders the main navigation links for authenticated users.
 */
const NavLinks = ({ theme, onNavigate }) => {
  const { username } = useAuth();
  const buttonClass = theme === 'tos' ? 'tos-accent cursor-pointer' : 'cursor-pointer focus:outline-none';
  
  return (
    <>
      <button onClick={() => onNavigate("/milestones")} className={buttonClass}>Milestones</button>
      <button onClick={() => onNavigate("/shop")} className={buttonClass}>Shop</button>
      <button onClick={() => onNavigate('/library')} className='rounded-lg'>Library</button>
      <button onClick={() => onNavigate(`/user/${username}`)} className="cursor-pointer">Dashboard</button>
    </>
  );
};


/**
 * Renders the user avatar and dropdown menu.
 */
const UserDropdown = ({ user, theme, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const themeClasses = {
    button: theme === 'tos' ? 'tos-border tos-theme-mono' : 'focus:ring-2 focus:ring-indigo-400 dark:focus:ring-pink-500 hover:bg-gray-100 dark:hover:bg-gray-700',
    avatarBorder: theme === 'tos' ? 'tos-border' : 'border-indigo-400 dark:border-pink-400',
    dropdownMenu: theme === 'tos' ? 'tos tos-border' : 'bg-white text-black dark:bg-gray-800 dark:text-white border-indigo-200 dark:border-pink-400',
    username: theme === 'tos' ? 'tos-accent' : '',
    logoutButton: theme === 'tos' ? 'tos-border tos-accent' : 'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <div className="relative ml-2" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={`flex items-center cursor-pointer gap-2 focus:outline-none px-2 py-1 rounded-lg transition-all ${themeClasses.button}`}
      >
        <img src={user.avatarLink} alt="Avatar" className={`h-9 w-9 rounded-full border-2 ${themeClasses.avatarBorder} shadow`} />
        <span className={`text-xs ${theme === 'tos' ? 'tos-accent' : 'text-gray-600 dark:text-gray-300'}`}>▼</span>
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-xl z-50 p-4 flex flex-col items-center animate-fadeIn border ${themeClasses.dropdownMenu}`}>
          <img src={user.avatarLink} alt="Avatar" className={`w-20 h-20 rounded-full border-2 mb-2 ${themeClasses.avatarBorder}`} />
          <div className={`font-semibold text-lg mb-4 text-center ${themeClasses.username}`}>{user.username}</div>
          <button onClick={onLogout} className={`w-full py-2 cursor-pointer rounded-lg font-medium transition shadow ${themeClasses.logoutButton}`}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};


// --- Main Component ---

/**
 * A responsive navigation bar that displays different content
 * based on the user's authentication status and the current theme.
 */
const Navbar = () => {
  const navigate = useNavigate();
  const { accessToken, username, avatarLink, loading, logout } = useAuth();
  const { theme } = useTheme();

  const user = { username, avatarLink };
  
  return (
    <nav className={getNavClasses(theme)}>
      {/* Left Side: Logo */}
      <div className="content-center">
        <img
          title='ReviseCoder'
          src={LOGO_URL}
          style={{ imageRendering: 'pixelated', height: '80%' }}
          alt="Logo"
          className={`object-cover cursor-pointer ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Right Side: Navigation & User Menu */}
      <div className={`flex items-center gap-6 relative ${theme === 'tos' ? 'tos-theme-mono' : ''}`}>
        {loading ? (
          <></> // Optionally, render a loading skeleton here
        ) : accessToken ? (
          <>
            <NavLinks theme={theme} onNavigate={navigate} />
            <UserDropdown user={user} theme={theme} onLogout={logout} />
          </>
        ) : (
          <LoginButton theme={theme} onLogin={() => navigate('/login')} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
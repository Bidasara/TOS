import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('tos');
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const [loop, setLoop] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationUp, setAnimationUp] = useState(false);
  const [currCharacter, setCurrCharacter] = useState('');

  const [currBreakAnimation, setCurrBreakAnimation] = useState('')
  const [isBreakPlaying, setIsBreakPlaying] = useState(true);
  const [breakAnimationUp, setBreakAnimationUp] = useState(false);

  const triggerAttack = () => {
    setCurrentAnimation('attack');
    setLoop(false);
    return;
  }

  // Initialize theme on mount
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark', 'cyberpunk', 'tos');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'cyberpunk') {
      document.documentElement.classList.add('cyberpunk');
    } else if (theme === 'tos') {
      document.documentElement.classList.add('tos');
    }
  }, [theme]);

  // Store current character in localStorage when it changes
  useEffect(() => {
    if (currCharacter) {
      localStorage.setItem('currCharacter', currCharacter);
    }
  }, [currCharacter]);
  

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : prev === 'dark' ? 'cyberpunk' : prev === 'cyberpunk' ? 'tos' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, currentAnimation,setCurrentAnimation,loop,setLoop,triggerAttack,isPlaying,setIsPlaying,setAnimationUp,animationUp,currCharacter,setCurrCharacter,currBreakAnimation,setCurrBreakAnimation,isBreakPlaying,setIsBreakPlaying,breakAnimationUp,setBreakAnimationUp }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
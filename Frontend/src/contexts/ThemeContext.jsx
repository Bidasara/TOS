import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const [loop, setLoop] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationUp, setAnimationUp] = useState(false);
  const [currCharacter, setCurrCharacter] = useState('Knight');

  const [currBreakAnimation, setCurrBreakAnimation] = useState('fire')
  const [isBreakPlaying, setIsBreakPlaying] = useState(true);
  const [breakAnimationUp, setBreakAnimationUp] = useState(false);

  const triggerAttack = () => {
    setCurrentAnimation('attack_1');
    setLoop(false);
    return;
  }

  // Initialize theme on mount
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('dark', 'cyberpunk');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'cyberpunk') {
      document.documentElement.classList.add('cyberpunk');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : prev === 'dark' ? 'cyberpunk' : 'light');
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
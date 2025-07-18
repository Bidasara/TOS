import React from 'react'
import SpriteDemo from './AnimationPart/SpriteAnimation'
import { useTheme } from '../contexts/ThemeContext'

const Animation = (props) => {
  const { theme,animationUp } = useTheme();
  return (
    <div className={`w-1/4 ${animationUp ? 'z-20':'z-1'} h-[calc(100% - 8px)] m-2 rounded-xl p-4 shadow-lg transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'}`}>
      <SpriteDemo/>
      {props.children}
    </div>
  )
}

export default Animation

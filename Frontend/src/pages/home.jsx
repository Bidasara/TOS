import { use, useEffect } from 'react';

// Contexts & Hooks
import { useTheme } from '../contexts/ThemeContext';
import { useProblemContext } from '../contexts/ProblemContext';
import { useNotification } from '../contexts/NotificationContext.jsx';
import { useModal } from '../contexts/ModalContext.jsx';
import { useNoteModal } from '../contexts/NoteModalContext.jsx';

// Components
import Animation from '../components/Animation';
import Dolist from '../components/Dolist';
import Options from '../components/Options';
import NoteModal from '../components/common/Notes.jsx';
import Modal from '../components/common/Modal.jsx';

import { useSpriteAnimation } from '../contexts/SpriteAnimationContext.jsx';

//==============================================================================
// Main Home Component (Wrapper)
//==============================================================================

/**
 * A simple wrapper component that renders the main content.
 * This structure is useful for separating concerns, especially if a Context Provider
 * were needed at this level.
 */
function Home() {
  return <HomeContent />;
}

//==============================================================================
// Home Content Component
//==============================================================================

function HomeContent() {
  //----------------------------------------------------------------------------
  // HOOKS
  //----------------------------------------------------------------------------

  // Destructure all necessary values from custom hooks
  const { theme, toggleTheme } = useTheme();
  
  // The useNotification hook is called but `showNotification` is not used in this component.
  // It's kept here in case it's needed for future development.
  const { showNotification } = useNotification();

  //----------------------------------------------------------------------------
  // RENDER LOGIC
  //----------------------------------------------------------------------------

  // Define dynamic CSS classes for cleaner JSX
  const containerClasses = `
    h-9/10 w-full flex flex-col flex-1 
    transition-colors duration-300 
    min-h-0 overflow-x-hidden
    ${theme === 'light' ? 'bg-gray-100' : 
      theme === 'dark' ? 'bg-gray-900' : 
      theme === 'tos' ? 'bg-blue-950' : 
      'bg-black cyberpunk-bg'
    }
  `;

  const themeToggleClasses = `
    fixed bottom-4 right-4 w-[4vw] h-[4vw] z-100 
    rounded-full cursor-pointer shadow-lg text-lg
    hover:shadow-xl transition-all
    ${theme === 'light' ? 'bg-white text-gray-900' : 
      theme === 'dark' ? 'bg-gray-800 dark:text-amber-400' : 
      'bg-black text-pink-400 border-2 border-cyan-400 neon-text'
    }
  `;

  //----------------------------------------------------------------------------
  // RENDER
  //----------------------------------------------------------------------------

  return (
    <div className={containerClasses}>
      <div className='flex flex-1 p-4 w-full gap-4 min-h-0'>
        <Animation />
        <Dolist />
        <Options />

        <NoteModal/>
        <Modal/>
      </div>

      {/* Theme Toggle Button */}
      <button 
        className={themeToggleClasses}
        onClick={toggleTheme}
      >
        {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '✦'}
      </button>
    </div>
  );
}

export default Home;
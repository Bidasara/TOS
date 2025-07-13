import Navbar from '../components/Navbar'
import Animation from '../components/Animation'
import Dolist from '../components/Dolist'
import Options from '../components/Options'
import { ProblemProvider, useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'
import NoteModal from '../components/common/Notes.jsx'

function Home() {
  return (
      <ProblemProvider>
        <HomeContent />
      </ProblemProvider>
  )
}

function HomeContent() {
  const { theme, toggleTheme } = useTheme();
  const { noteModalOpen, setNoteModalOpen, noteModalContent } = useProblemContext();
  
  return (
    <div className={`flex flex-col flex-1 transition-colors duration-300 min-h-0 h-[calc(100vh-64px)] 
      ${theme === 'light' ? 'bg-gray-100' : theme === 'dark' ? 'bg-gray-900' : 'bg-black cyberpunk-bg'}`}>
      <div className='flex flex-1 p-4 gap-4 min-h-0'>
        <Animation/>
        <NoteModal
          isOpen={noteModalOpen}
          onClose={() => setNoteModalOpen(false)}
          {...noteModalContent}
        />
        <Dolist/>
        <Options/>
      </div>
      <button 
        className={`fixed bottom-4 right-4 w-[4vw] h-[4vw] rounded-full cursor-pointer
                 shadow-lg text-lg hover:shadow-xl transition-all
                 ${theme === 'light' ? 'bg-white text-gray-900' : theme === 'dark' ? 'bg-gray-800 dark:text-amber-400' : 'bg-black text-pink-400 border-2 border-cyan-400 neon-text'}`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🌙' : theme === 'dark' ? '☀️' : <span className="text-pink-400">✦</span>}
      </button>
    </div>
  )
}

export default Home;

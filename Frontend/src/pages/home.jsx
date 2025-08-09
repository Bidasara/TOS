import Animation from '../components/Animation'
import Dolist from '../components/Dolist'
import Options from '../components/Options'
import { useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'
import NoteModal from '../components/common/Notes.jsx'
import Modal from '../components/common/Modal.jsx'
import Input from '../components/common/Input.jsx'
import { useEffect } from 'react'
import api from '../api'
import { getAccessToken } from '../authToken'
import { useNotification } from '../contexts/NotificationContext.jsx'

function Home() {
  return (
      // <ProblemProvider>
        <HomeContent />
      // {/* </ProblemProvider> */}
  )
}

function HomeContent() {
  const {showNotification} = useNotification();
  const { theme, toggleTheme } = useTheme();
  const { 
    noteModalOpen, setNoteModalOpen, noteModalContent ,modalTitle,modalOpen,onModalClose,
    inputLabel,inputId,inputType,inputPlaceHolder,inputText,onChange,modalExtra,addCategory,func,addProblem
  } = useProblemContext();
  let currFunc = addCategory;
  if(func==='problem')
    currFunc = addProblem;
  
  // Global animation fetch effect
  useEffect(() => {
    const fetchUserAnimations = async () => {
      try {
        const token = getAccessToken();
        if (!token) return;

        const response = await api.get('/animation/anim', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        const userAnimations = response.data.data;
        if (userAnimations && userAnimations.length > 0) {
          localStorage.setItem('userAnimations', JSON.stringify(userAnimations));
        }
      } catch (error) {
        console.error('Error fetching user animations:', error);
      }
    };

    fetchUserAnimations();
  }, []); // Run on each render
  

  return (
    <div className={`h-9/10 w-full flex flex-col flex-1 transition-colors duration-300 min-h-0 overflow-x-hidden
      ${theme === 'light' ? 'bg-gray-100' : theme === 'dark'  ? 'bg-gray-900' : theme=== 'tos'? 'bg-blue-950': 'bg-black cyberpunk-bg'}`}>
      <div className='flex flex-1 p-4 w-full gap-4 min-h-0'>
        <Animation/>
        <NoteModal isOpen={noteModalOpen} onClose={() => setNoteModalOpen(false)} {...noteModalContent}         
          addToRevise={noteModalContent.addToRevise}
        />
        <Modal
          isOpen={modalOpen}
          onClose={onModalClose}
          title={modalTitle}
          onSubmit={currFunc}
          extra ={modalExtra}
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
      </button> {/* Theme Toggle */}
    </div>
  )
}

export default Home;

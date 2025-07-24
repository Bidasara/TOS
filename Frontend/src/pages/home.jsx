import Animation from '../components/Animation'
import Dolist from '../components/Dolist'
import Options from '../components/Options'
import { ProblemProvider, useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'
import NoteModal from '../components/common/Notes.jsx'
import Modal from '../components/common/Modal.jsx'
import Input from '../components/common/Input.jsx'

function Home() {
  return (
      <ProblemProvider>
        <HomeContent />
      </ProblemProvider>
  )
}

function HomeContent() {
  const { theme, toggleTheme } = useTheme();
  const { 
    noteModalOpen, setNoteModalOpen, noteModalContent ,modalTitle,modalOpen,onModalClose,
    inputLabel,inputId,inputType,inputPlaceHolder,inputText,onChange,modalExtra,addCategory,func,addProblem
  } = useProblemContext();
  let currFunc = addCategory;
  if(func==='problem')
    currFunc = addProblem;
  
  return (
    <div className={`flex flex-col flex-1 transition-colors duration-300 min-h-0 overflow-x-hidden
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
        >
          <Input
            label={inputLabel}
            id={inputId}
            type={inputType}
            placeholder={inputPlaceHolder}
            value={inputText}
            onChange={onChange}
            onKeyDown={e => { if (e.key === 'Enter') currFunc}}
            extra = {modalExtra}
          />
        </Modal> {/* Common Modal and Input */}
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

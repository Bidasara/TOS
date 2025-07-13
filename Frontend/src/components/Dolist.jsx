import {useState} from 'react'
import Scrollbar from './ProblemsListPart/Scrollbar'
import Dropdown from './ProblemsListPart/Dropdown'
import Modal from './common/Modal'
import Input from './common/Input'
import { useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'

const Dolist = () => {
    const {addCategory,currentList,setElevatedCategory} = useProblemContext()
    const [tabOpen, setTabOpen] = useState(false)
    const [inputVal, setInputVal] = useState("");
    const { theme } = useTheme();
    
    return (
        <div className={`flex-1 flex flex-col gap-4 my-2 rounded-xl p-5 overflow-hidden shadow-lg transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-pink-500' : 'bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700'}`}>
            <h2 className={`text-lg font-bold ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-white'}`}>Problem Lists</h2>
            <Scrollbar/>
            <div className="flex-1 overflow-hidden">
                <Dropdown/>
            </div>
            <button
                type='button'
                className={`mt-2 text-base font-medium py-2.5 w-full rounded-lg flex items-center justify-center gap-2 transition-colors duration-200
                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-transparent border border-dashed border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-900/30'}`}
                onClick={()=> setTabOpen(!tabOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add New Topic
            </button>
            {tabOpen && (
                <Modal
                    isOpen={tabOpen}
                    onClose={() => setTabOpen(false)}
                    onSubmit={()=>{
                        addCategory(currentList?._id,inputVal);
                        setInputVal("");
                        setTabOpen(false)
                        setElevatedCategory(currentList.categories?.length - 1)
                    }}
                    title="Add New Category"
                >
                    <Input
                        label="Category Title"
                        id="category-title"
                        value={inputVal}
                        onChange={(e)=> {setInputVal(e.target.value)}}
                        placeholder="Enter category title"
                        autoFocus={true}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addCategory(currentList._id, inputVal);
                                setInputVal("");
                                setTabOpen(false);
                            }
                        }}
                    />
                </Modal>
            )}
        </div> 
    )
}

export default Dolist

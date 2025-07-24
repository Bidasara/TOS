import { useState } from 'react'
import api from "../api";
import { useProblemContext } from '../contexts/ProblemContext'
import Input from './common/Input';
import Modal from './common/Modal';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Options = (props) => {
    const {accessToken} = useAuth();
    const {setCurrentList,addEmptyList,totalProblems,totalSolved,totalRevised} = useProblemContext();
    const { theme } = useTheme();
    const handleAddList = async (title) =>{
        if(!accessToken)
            console.log("need to be registered for that");
        else{
            addEmptyList(title);
        }
    }    
    const {recomList,addToList} = useProblemContext();
    const [tabOpen, setTabOpen] = useState(false);
    const [inputVal, setInputVal] = useState("")

    return (
        <div className={`rounded-xl p-4 shadow-lg transition-all duration-300 
      ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>

            {/* Recommended Lists */}
            <h2 className={`text-lg font-bold mb-4 ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-800 dark:text-white'}`}>Recommended Lists</h2> 
            <div className={`space-y-3 overflow-auto ${theme === 'cyberpunk' ? 'cyberpunk-scrollbar' : ''}`}>
                {(Array.isArray(recomList) ? recomList : []).map(list => (
                    <div key={list._id} onClick={() => addToList(list._id)}
                        className={`p-3 rounded-lg cursor-pointer group transition-all duration-200
                            ${theme === 'cyberpunk' ? 'bg-black border border-cyan-400 neon-text hover:bg-pink-900/30' : 'border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-gray-700/50'}`}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className={`font-medium transition-colors ${theme === 'tos' ? 'tos-light group-hover:tos-accent' : theme === 'cyberpunk' ? 'text-cyan-300 neon-text group-hover:text-pink-400' : 'text-gray-800 group-hover:text-indigo-600 dark:text-gray-200 dark:group-hover:text-indigo-400'}`}>{list.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* QuickStats Section */}
            <div className={`quickstats-container my-4 p-3 rounded-lg shadow transition-all duration-300 ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-cyan-400' : 'bg-gray-100 dark:bg-gray-700'}`}>
                <h3 className={`text-sm font-semibold mb-3 ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-700 dark:text-gray-300'}`}>Quick Stats</h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className={`p-4 rounded-lg shadow-sm transition-transform hover:transform hover:scale-[1.02] ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-pink-500 neon-text' : 'bg-indigo-50 dark:bg-indigo-900/30'}`}>
                        <div className={`text-xs mb-1 ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-indigo-600 dark:text-indigo-400'}`}>Problems Solved</div>
                        <div className={`text-2xl font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-700 dark:text-indigo-300'}`}>{totalSolved}/{totalProblems}</div>
                    </div>
                    <div className={`p-4 rounded-lg shadow-sm transition-transform hover:transform hover:scale-[1.02] ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-cyan-400 neon-text' : 'bg-green-50 dark:bg-green-900/30'}`}>
                        <div className={`text-xs mb-1 ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-green-600 dark:text-green-400'}`}>Problems Revised</div>
                        <div className={`text-2xl font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-green-700 dark:text-green-300'}`}>{totalRevised}/{totalSolved}</div>
                    </div>
                </div>
            </div>

            {/* Create Custom List Button*/}
            <div>
                <button
                    onClick={()=> setTabOpen(true)}
                    className={`w-full py-2.5 rounded-lg font-medium transition-all shadow-md
                        ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500'}`}
                >
                    Create Custom List
                </button>
            </div>
            {tabOpen && (
                <Modal
                    isOpen={tabOpen}
                    onClose={() => setTabOpen(false)}
                    onSubmit={() => {
                        const newList = handleAddList(inputVal);
                        // setCurrentList(newList);
                        setInputVal("");
                        setTabOpen(false);
                    }}
                    title="Add New List"
                >
                <Input
                    label="List Title"
                    id="list-title"
                    value={inputVal}
                    onChange={(e) => {setInputVal(e.target.value)}}
                    placeholder="Enter problem title"
                    autoFocus={true}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const newList = handleAddList(inputVal);
                            // setCurrentList(newList);
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

export default Options
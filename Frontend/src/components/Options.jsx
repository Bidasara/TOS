import { useState } from 'react'
import api from "../api";
import { useProblemContext } from '../contexts/ProblemContext'
import Input from './common/Input';
import Modal from './common/Modal';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Options = (props) => {
    const { accessToken } = useAuth();
    const { setCurrentList, addEmptyList, totalProblems, totalSolved, totalRevised,data } = useProblemContext();
    const { theme } = useTheme();
 
    const [tabOpen, setTabOpen] = useState(false);
    const [inputVal, setInputVal] = useState("")

    const handleAdd = () => {
        setModalTitle("Add Category");
        // setInputText("")
        setFunc("category");
        setInputLabel("Category Title");
        setInputId("Category");
        setInputPlaceHolder("name of your category")
        setInputType("text")
        setModalExtra(currentList._id);
        setModalOpen(true);
    }

    return (
        <div className={`h-full rounded-xl flex flex-col justify-between gap-1 shadow-lg transition-all duration-300 p-3 w-1/4
            ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>

            {/* Recommended Lists */}
            <h2 className={`text-lg font-bold h-1/12 ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-800 dark:text-white'}`}>Your Lists</h2>
            <div className={`h-6/12 flex flex-col gap-4 scrollbar overflow-auto ${theme === 'cyberpunk' ? 'cyberpunk-scrollbar' : ''}`}>
                {(Array.isArray(data.lists) ? data.lists : []).map(list => {
                    // Calculate count here, before returning JSX for this list
                    let problemCount = 0;
                    // Ensure list.categories exists and is an array before iterating
                    if (list.categories && Array.isArray(list.categories)) {
                        for (const cat of list.categories) {
                            // Ensure cat.problems exists and is an array before accessing length
                            if (cat.problems && Array.isArray(cat.problems)) {
                                problemCount += cat.problems.length; // Corrected: .length is a property, not a method
                            }
                        }
                    }

                    return (
                        <div key={list._id} onClick={() => setCurrentList(list)}
                            className={`p-3 rounded-lg cursor-pointer group transition-all duration-200
                                ${theme === 'cyberpunk' ? 'bg-black border border-cyan-400 neon-text hover:bg-pink-900/30' : 'border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-gray-700/50'}`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className={`font-medium transition-colors ${theme === 'tos' ? 'tos-light group-hover:tos-accent' : theme === 'cyberpunk' ? 'text-cyan-300 neon-text group-hover:text-pink-400' : 'text-gray-800 group-hover:text-indigo-600 dark:text-gray-200 dark:group-hover:text-indigo-400'}`}>{list.title}</h3>
                                {/* Now, problemCount is a simple expression that can be rendered */}
                                <div className='bg-gray-200 text-sm rounded-md px-1.5 py-0.4'>{problemCount}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Create Custom List Button*/}
            <div className='h-1/12'>
                <button
                    onClick={() => setTabOpen(true)}
                    className={`w-full py-2.5 rounded-lg font-medium transition-all shadow-md
                        ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500'}`}
                >
                    Create Your List
                </button>
            </div>

            {/* QuickStats Section */}
            <div className={`h-3/12 px-3 quickstats-container flex flex-col justify-around gap-1 rounded-lg shadow transition-all duration-300 ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-cyan-400' : 'bg-gray-100 dark:bg-gray-700'}`}>
                <h3 className={`text-sm font-semibold ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-700 dark:text-gray-300'}`}>Quick Stats</h3>
                <div className="flex items-center justify-between gap-3 h-8/12"> {/* Changed justify-around to justify-between if you want no space on the ends, combined with gap for internal spacing */}
                    {/* Child 1 */}
                    <div className={`h-10/12 flex flex-col justify-between rounded-lg shadow-sm transition-transform hover:transform hover:scale-[1.02] flex-grow w-full ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-pink-500 neon-text' : 'bg-indigo-50 dark:bg-indigo-900/30'}`}>
                        <div className={`text-xs p-2 ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-indigo-600 dark:text-indigo-400'}`}>Problems Solved</div>
                        <div className={`text-2xl p-2 font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-700 dark:text-indigo-300'}`}>{totalSolved}/{totalProblems}</div>
                    </div>
                    {/* Child 2 */}
                    <div className={`h-10/12 flex flex-col justify-between rounded-lg shadow-sm transition-transform hover:transform hover:scale-[1.02] flex-grow w-full ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-cyan-400 neon-text' : 'bg-green-50 dark:bg-green-900/30'}`}>
                        <div className={`text-xs p-2 ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-green-600 dark:text-green-400'}`}>Problems Revised</div>
                        <div className={`text-2xl p-2 font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-green-700 dark:text-green-300'}`}>{totalRevised}/{totalSolved}</div>
                    </div>
                </div>
            </div>
            {tabOpen && (
                <Modal
                    isOpen={tabOpen}
                    onClose={() => setTabOpen(false)}
                    onSubmit={() => {
                        const newList = handleAddList(inputVal);
                        // setCurrentList(newList); // This might need adjustment depending on addEmptyList's return
                        setInputVal("");
                        setTabOpen(false);
                    }}
                    title="Add New List"
                >
                    <Input
                        label="List Title"
                        id="list-title"
                        value={inputVal}
                        onChange={(e) => { setInputVal(e.target.value) }}
                        placeholder="Enter problem title"
                        autoFocus={true}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const newList = handleAddList(inputVal);
                                // setCurrentList(newList); // This might need adjustment depending on addEmptyList's return
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

export default Options;
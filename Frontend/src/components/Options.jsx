import { useState, useEffect } from 'react'; // 1. Import useEffect
import { useProblemContext } from '../contexts/ProblemContext';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useModal } from '../contexts/ModalContext';
import { useNotification } from '../contexts/NotificationContext';

const Options = () => {
    //1. Value from contexts
    const { setCurrentList, data, getTotalSolved, totalProblems, totalSolved, totalRevised } = useProblemContext();
    const { theme } = useTheme();
    const { setModalOpen, setFunc, setQuery, setModalTitle, setModalExtra, setInputLabel, setInputId, setInputPlaceHolder, query } = useModal();
    const { accessToken } = useAuth();
    const { showNotification } = useNotification();

    // 2. Add state to manage the visibility of the stats
    const [isStatsVisible, setIsStatsVisible] = useState(true);

    const handleAddList = async () => {
        if (!accessToken) {
            showNotification("need to be registered for that", "error");
            return;
        }
        else {
            setModalOpen(true)
            setFunc("list")
            setQuery("")
            setModalTitle("Add New List")
            setModalExtra(query)

            setInputLabel("List Title")
            setInputId("list-title")
            setInputPlaceHolder("the name of your list")
        }
    }
    useEffect(() => {
        getTotalSolved();
    }, [])

    // 3. Add an effect to automatically hide the stats after a delay
    useEffect(() => {
        let timer;
        // If the stats are visible, start a timer
        if (isStatsVisible) {
            timer = setTimeout(() => {
                setIsStatsVisible(false); // Hide the stats after 7 seconds
            }, 7000); // 7000 milliseconds = 7 seconds
            console.log('timer runs')
        }
        // Cleanup function: This will clear the timer if the component
        // unmounts or if isStatsVisible changes before the timer finishes.
        return () => clearTimeout(timer);
    }, [isStatsVisible]); // This effect runs whenever 'isStatsVisible' changes

    return (
        <div className={`h-full rounded-xl flex flex-col justify-between gap-1 shadow-lg transition-all duration-300 p-3 w-1/4
            ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>

            {/* Your Lists Section (No Changes) */}
            <h2 className={`text-lg font-bold h-1/12 ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-800 dark:text-white'}`}>Your Lists</h2>
            <div className={`h-6/12 flex flex-col gap-4 scrollbar overflow-auto ${theme === 'cyberpunk' ? 'cyberpunk-scrollbar' : ''}`}>
                {(Array.isArray(data.lists) ? data.lists : []).map(list => {
                    let problemCount = 0;
                    if (list.categories && Array.isArray(list.categories)) {
                        for (const cat of list.categories) {
                            if (cat.problems && Array.isArray(cat.problems)) {
                                problemCount += cat.problems.length;
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
                                <div className='bg-gray-200 text-sm rounded-md px-1.5 py-0.4'>{problemCount}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Create Custom List Button (No Changes) */}
            <div className='h-1/12'>
                <button
                    onClick={handleAddList}
                    className={`w-full py-2.5 rounded-lg font-medium transition-all shadow-md
                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 dark:from-indigo-700 dark:to-indigo-600 dark:hover:from-indigo-600 dark:hover:to-indigo-500'}`}
                >
                    Create Your List
                </button>
            </div>

            {/* 4. UPDATED QuickStats Section */}
            <div className="h-3/12 relative"> {/* Added 'relative' for positioning the button */}

                {/* This is the "Show" button overlay. It only appears when stats are hidden. */}
                {!isStatsVisible && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button
                            onClick={() => {
                                setIsStatsVisible(true)
                                getTotalSolved();
                            }}
                            className="px-4 py-2 bg-slate-900/60 text-white rounded-lg backdrop-blur-sm border border-slate-100/20 hover:bg-slate-900/80 transition-all"
                        >
                            Show Stats
                        </button>
                    </div>
                )}

                <div
                    className={`h-full px-3 flex flex-col justify-around gap-1 rounded-lg shadow transition-all duration-500 
    ${isStatsVisible ? '' : 'blur-md'}
    ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-cyan-400' : 'bg-gray-100 dark:bg-gray-700'}`}
                >
                    <h3 className={`text-sm font-semibold ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-700 dark:text-gray-300'}`}>Quick Stats</h3>
                    <div className="flex items-center justify-between gap-3 h-8/12">
                        {/* Simplified Stat Box - Problems Solved */}
                        <div className={`h-10/12 flex flex-col justify-between rounded-lg shadow-sm transition-transform hover:scale-[1.02] flex-grow p-2 ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-pink-500 neon-text' : 'bg-indigo-50 dark:bg-indigo-900/30'}`}>
                            <div className={`text-xs ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-indigo-600 dark:text-indigo-400'}`}>Problems Solved</div>
                            <div className={`text-xl font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-indigo-700 dark:text-indigo-300'}`}>{totalSolved}/{totalProblems}</div>
                        </div>

                        {/* Simplified Stat Box - Problems Revised */}
                        <div className={`h-10/12 flex flex-col justify-between rounded-lg shadow-sm transition-transform hover:scale-[1.02] flex-grow p-2 ${theme === 'tos' ? 'bg-tos-bg border border-tos-accent' : theme === 'cyberpunk' ? 'bg-black border border-cyan-400 neon-text' : 'bg-green-50 dark:bg-green-900/30'}`}>
                            <div className={`text-xs ${theme === 'tos' ? 'tos-light' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-green-600 dark:text-green-400'}`}>Problems Revised</div>
                            <div className={`text-xl font-bold ${theme === 'tos' ? 'tos-accent' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-green-700 dark:text-green-300'}`}>{totalRevised}/{totalSolved}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;
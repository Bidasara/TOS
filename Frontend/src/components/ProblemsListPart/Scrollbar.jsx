import React, { useState, useEffect } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext'
import { useTheme } from '../../contexts/ThemeContext'

const Scrollbar = () => {
    //Hooks
    const {data, currentList, setCurrentList,setElevatedCategory,setOpenCategory} = useProblemContext()
    const [center, setCenter] = useState(0)
    const { theme } = useTheme()

    useEffect(() => {
        if (!data?.lists?.length) return;
        setCenter(data.lists.findIndex(list => list._id === currentList?._id));
    }, [data, currentList?._id])

    const scrollToCard = (idx) => {
        if (idx < 0 || idx >= data?.lists?.length) return;
        setCurrentList(data?.lists[idx]);
        setElevatedCategory(data?.lists[idx].categories?[0]._id: null);
        setOpenCategory(null);
        setCenter(idx);
    }

    return (
        <div className={`rounded-lg p-2 shadow transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-pink-500' : 'bg-gray-100 dark:bg-gray-700'}`}>
            <div className="flex items-center gap-3 z-10">
                {/* left button */}
                <button
                    onClick={() => scrollToCard(center-1)}
                    className={`h-9 w-9 flex z-10 items-center justify-center rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform
                        ${theme === 'cyberpunk' ? 'bg-black text-cyan-400 border border-cyan-400 neon-text hover:bg-pink-900/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300'}`}
                    disabled={center === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {/* Title */}
                <div className="relative flex-1 flex items-center justify-center py-2">
                    <div className="absolute inset-0 flex items-center px-8">
                        <div className={`w-full h-[2px] rounded ${theme === 'cyberpunk' ? 'bg-pink-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                    </div>
                    <div className={`relative z-10 px-4 py-1 rounded-full font-medium shadow-sm
                        ${theme === 'cyberpunk' ? 'bg-black border border-cyan-400 text-cyan-400 neon-text' : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white'}`}>
                        {currentList?.title || "Select a list"}
                    </div>
                </div>

                {/* right button */}
                <button
                    onClick={() => scrollToCard(center+1)}
                    className={`h-9 w-9 flex z-10 items-center justify-center rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform
                        ${theme === 'cyberpunk' ? 'bg-black text-cyan-400 border border-cyan-400 neon-text hover:bg-pink-900/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300'}`}
                    disabled={center === data?.lists.length - 1 || !data?.lists.length}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Scrollbar
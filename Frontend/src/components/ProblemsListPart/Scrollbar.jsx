import React, { useState, useEffect } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext'
import { useTheme } from '../../contexts/ThemeContext'

const Scrollbar = () => {
    //Hooks
    const {data, currentList, setCurrentList,setElevatedCategory,setOpenCategory, deleteList} = useProblemContext()
    const [center, setCenter] = useState(0)
    const { theme } = useTheme()

    useEffect(() => {
        if (!data?.lists?.length) return;
        setCenter(data.lists.findIndex(list => list._id === currentList?._id));
    }, [data, currentList?._id])

    const scrollToCard = (idx) => {
        setOpenCategory(null);
        if (idx < 0 || idx >= data?.lists?.length) return;
        setCurrentList(data?.lists[idx]);
        setCenter(idx);
    }

    return (
        <div className={`scrollbar-container transition-all duration-300 ${theme === 'tos' ? 'tos bg-opacity-90' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>
            <div className="flex items-center gap-3 z-10">
                {/* left button */}
                <button
                    onClick={() => scrollToCard(center-1)}
                    className={`h-9 w-9 flex z-10 items-center justify-center rounded-full border-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform
                        ${theme === 'tos' ? 'tos-border tos-accent bg-tos-bg hover:bg-tos-blue hover:text-tos-grey tos-theme-mono shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300'}`}
                    disabled={center === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {/* Title */}
                <div className="relative flex-1 flex items-center justify-center py-2">
                    <div className={`relative z-10 flex items-center px-6 py-2 rounded-full font-bold shadow-lg border-2 transition-colors
                        ${theme === 'tos' ? 'bg-tos-bg tos-accent tos-theme-mono tos-border tos-shadow' : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white'}`}>
                        <span>{currentList?.title || "Select a list"}</span>
                        {currentList?._id && (
                            <button
                                onClick={async (e) => {
                                    e.stopPropagation();
                                    if (!window.confirm('Are you sure you want to delete this list? This action cannot be undone.')) return;
                                    await deleteList(currentList._id);
                                    // After deletion, select the next available list or clear selection
                                    const idx = data.lists.findIndex(list => list._id === currentList._id);
                                    const nextList = data.lists.length > 1
                                        ? data.lists[(idx + 1) % data.lists.length]
                                        : null;
                                    setCurrentList(nextList || {});
                                    setElevatedCategory(null);
                                    setOpenCategory(null);
                                }}
                                className={`ml-2 p-1 rounded-full border transition-colors
                                    ${theme === 'tos' ? 'border-tos-blue text-red-500 hover:tos-shadow' : 'border-transparent text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-400'}`}
                                title="Delete this list"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* right button */}
                <button
                    onClick={() => scrollToCard(center+1)}
                    className={`h-9 w-9 flex z-10 items-center justify-center rounded-full border-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform
                        ${theme === 'tos' ? 'tos-border tos-accent bg-tos-bg hover:bg-tos-blue hover:text-tos-grey tos-theme-mono shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300'}`}
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
import React, { useRef, useState, useEffect } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext.jsx'
import Problem from './Problem.jsx'
import ProblemTab from './ProblemTab.jsx'
import { useTheme } from '../../contexts/ThemeContext';

const ProblemsScroll = ({ setProblemScroll }) => {
    const { currentList,data,openCategory,setOpenCategory,elevatedProblem,setElevatedProblem } = useProblemContext()
    const [problemTab, setProblemTab] = useState(false);
    const problemContainerRef = useRef(null);
    const problemRef = useRef({});
    const { theme } = useTheme();

    function handleAddProblem(category) {
        setOpenCategory(category);
        setProblemTab(true);
    }

    function toggleCategory(category) {
        const isSame = openCategory?._id === category?._id;
        setOpenCategory(isSame ? null : category);
        setProblemScroll(!isSame);
    }

    useEffect(() => {
        if (!problemContainerRef.current || !problemRef?.current) return;
        const options = {
            root: problemContainerRef.current,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log(entry)
                    const problemId = entry.target.dataset.problemId;
                    setElevatedProblem(problemId);
                }
            });
        }, options);

        // Observe all category elements
        
        Object.values(problemRef.current).forEach(ref=>{
            if(ref) observer.observe(ref);
        }) 
        

        return () => {
            observer.disconnect();
        };
    }, [currentList.categories,problemContainerRef,elevatedProblem]);

    return (
        <div className='w-full h-full flex flex-1 flex-col items-center justify-center'>
            <div
                onClick={() => toggleCategory(openCategory)}
                className={`h-14 w-11/12 px-4 rounded-lg shadow-xl cursor-pointer font-medium flex justify-between items-center transition-all duration-200
                    ${theme === 'cyberpunk' ? 'bg-black bg-opacity-90 border-2 border-pink-500 neon-text text-cyan-400' : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'}`}
            >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-indigo-500 dark:text-indigo-400 shrink-0'}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span className={`text-sm truncate ${theme === 'cyberpunk' ? 'text-cyan-300 neon-text' : ''}`}>{openCategory?.title}</span>
                    <span className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-md ${theme === 'cyberpunk' ? 'bg-black border border-cyan-400 text-cyan-400' : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'} shrink-0`}>
                        {openCategory ? data.lists?.find(list => list._id === currentList._id)?.categories?.find(cat => cat._id === openCategory?._id)?.problems?.length || 0 : 0}
                    </span>
                </div>
                <span className={`transition-transform duration-300 shrink-0 ml-2 ${theme === 'cyberpunk' ? 'text-pink-400 neon-text' : ''}`} style={{ transform: 'rotate(180deg)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>
            <div ref={problemContainerRef} className="transition-all duration-300 w-full h-full z-10 overflow-auto scroll-container">
                <div className="px-2 mt-2 flex flex-col items-center">
                    <div className='h-[15vh]'></div>
                    {!openCategory || data.lists?.find(list => list._id === currentList._id)?.categories?.find(cat => cat._id === openCategory?._id)?.problems?.length === 0 ? (
                        <div className="w-11/12 text-center py-6 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                            No problems yet. Add your first problem.
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center">
                            {data.lists?.find(list => list._id === currentList._id)?.categories?.find(category => category._id === openCategory?._id)?.problems?.map((problem) => (
                                <div 
                                    className='w-full flex flex-col items-center'
                                    ref={el=>problemRef.current[problem._id]=el}
                                    data-problem-id={problem._id}
                                    key={problem._id}
                                >
                                    <Problem
                                        key={problem._id}
                                        elevatedProblem={elevatedProblem}
                                        problem={problem}
                                        category={openCategory}
                                        list={currentList}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='h-[15vh]'></div>
                </div>
            </div>
            <button
                type="button"
                className={`w-11/12 mt-3 py-2 border rounded-lg text-center text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200
                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'border-dashed border-gray-300 text-gray-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-600 dark:text-gray-400 dark:hover:text-indigo-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/30'}`}
                onClick={() => handleAddProblem(openCategory)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Problem
            </button>
            {problemTab && (
                <ProblemTab
                    setElevated={setElevatedProblem}
                    problemTab={problemTab}
                    setProblemTab={setProblemTab}
                    category={openCategory}
                    openCategory={openCategory}
                    setOpenCategory={setOpenCategory}
                />
            )}
        </div>
    )
}

export default ProblemsScroll

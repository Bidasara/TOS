import { useState, useEffect, useRef } from 'react'
import Scrollbar from './ProblemsListPart/Scrollbar'
import Dropdown from './ProblemsListPart/Dropdown'
import Modal from './common/Modal'
import Input from './common/Input'
import { useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import api from '../api'
import Notes from './common/Notes'
import './breakApart.css'
import BreakDemo from './AnimationPart/BreakAnimations.jsx'
import Scroll from './common/Scroll.jsx'

const ReviseProblemComponent = ({ problem, listId, categoryTitle, handleMarkRevised, removingProblems, splitBurnProblems }) => {
    return splitBurnProblems[problem._id] ? (
        <>
            <div
                key={problem._id}
                className={`p-3 bg-white z-50 rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between`}
            >
                <BreakDemo className='absolute z-100' animation='fire' key={problem._id} />
                <div>
                    <div className="font-semibold">{problem.problemId?.title || 'Untitled Problem'}</div>
                    <div className="text-xs text-gray-500">
                        #{problem.problemId?.num} | {problem.problemId?.difficulty} | {categoryTitle}
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => handleMarkRevised(listId, categoryTitle, problem._id)}
                        className="text-xs px-2 py-1 rounded bg-green-100 text-green-800"
                    >
                        Mark Revised
                    </button>
                    {problem.problemId?.link && (
                        <a href={problem.problemId.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500">
                            View Problem
                        </a>
                    )}
                </div>
            </div>
        </>
    ) : null
};

const Dolist = () => {
    // --- Contexts ---
    const {
        addCategory, currentList, setElevatedCategory,
        updateProblemRevisedStatus, reviseData, setReviseData,
        setNoteModalOpen, setNoteModalContent, noteModalOpen, noteModalContent,
        setOpenCategory
    } = useProblemContext()
    const { theme, triggerAttack, setAnimationUp, currCharacter } = useTheme()
    const { accessToken } = useAuth()

    // --- State ---
    const [tabOpen, setTabOpen] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const [viewMode, setViewMode] = useState('lists') // 'lists' or 'toRevise'
    const [selectedReviseListId, setSelectedReviseListId] = useState(null)
    const [removingProblems, setRemovingProblems] = useState({})
    const [splitBurnProblems, setSplitBurnProblems] = useState({})

    // --- Refs ---
    const containerRef = useRef(null)
    const listRefs = useRef({})

    // --- Effects ---
    useEffect(() => {
        if (viewMode === 'toRevise' && accessToken) {
            fetchReviseData()

        }
    }, [viewMode, accessToken]) // for fetching data when click To Revise button 

    // --- Handlers ---
    const fetchReviseData = async () => {
        if (!accessToken) return
        try {
            const response = await api.get('data/reviseList', {
                headers: { Authorization: `Bearer ${accessToken}` }
            })
            setReviseData(response.data.data || [])
            setSelectedReviseListId(null)
        } catch (error) {
            console.error(error)
        }
    }

    const handleMarkRevised = async (listId, categoryTitle, problemId) => {
        setAnimationUp(true);
        triggerAttack()
        // Alternate between break-apart and split-burn
        const useSplitBurn = currCharacter === 'Wizard' || currCharacter === 'Demon';
        const animationDelay = currCharacter === 'Demon' ? 5700 : currCharacter === 'Wizard' ? 900 : 900;
        if (useSplitBurn) {
            setTimeout(() => {
                setSplitBurnProblems(prev => ({ ...prev, [problemId]: true }));
            }, animationDelay);
            
            setTimeout(() => {
                updateProblemRevisedStatus(listId, categoryTitle, problemId);
                setSplitBurnProblems(prev => {
                    const newState = { ...prev };
                    delete newState[problemId];
                    return newState;
                });
            }, animationDelay+650); // Match animation duration
        } else {
            setTimeout(() => {
                setRemovingProblems(prev => ({ ...prev, [problemId]: true }));
            }, animationDelay);
            setTimeout(() => {
                updateProblemRevisedStatus(listId, categoryTitle, problemId);
                setRemovingProblems(prev => {
                    const newState = { ...prev };
                    delete newState[problemId];
                    return newState;
                });
            }, animationDelay + 400);
        }
    }

    // --- Derived Data ---
    const selectedReviseList = reviseData.find(list => list.listId === selectedReviseListId)

    // --- New ReviseProblemItem Component ---
    const ReviseProblemItem = ({ item: prob, selectedReviseList, handleMarkRevised, removingProblems, splitBurnProblems, setNoteModalContent, setNoteModalOpen }) => {
        const cardBaseClass =
            "p-4 bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden";
        if (splitBurnProblems[prob._id]) {
            return (
                <div
                    key={prob._id}
                    className={cardBaseClass}
                    style={{ position: 'relative'}}
                > 
                    <BreakDemo animation='light' key={prob._id} />
                    <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate max-w-xs sm:max-w-md" title={prob.problemId?.title}>{prob.problemId?.title || 'Untitled Problem'}</div>
                        <div className="text-xs text-gray-500 truncate max-w-xs sm:max-w-md">
                            #{prob.problemId?.num} | {prob.problemId?.difficulty} | {prob.categoryTitle}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center flex-shrink-0 mt-2 sm:mt-0">
                        <button
                            onClick={() => handleMarkRevised(selectedReviseList.listId, prob.categoryTitle, prob._id)}
                            className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 whitespace-nowrap"
                        >
                            Mark Revised
                        </button>
                        {prob.problemId?.link && (
                            <a
                                href={prob.problemId.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-xs whitespace-nowrap"
                            >
                                View
                            </a>
                        )}
                        <button
                            onClick={() => {
                                setNoteModalContent({
                                    problemId: prob._id,
                                    initialText: prob.notes,
                                    listId: selectedReviseList.listId,
                                    categoryTitle: prob.categoryTitle
                                })
                                setNoteModalOpen(true)
                            }}
                            className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30"
                            title="View/Edit Notes"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                            </svg>
                        </button>
                    </div>
                </div>
            );
        } else if (removingProblems[prob._id]) {
            return (
                <div
                    key={prob._id}
                    className={cardBaseClass + " break-apart-20"}
                    style={{ position: 'relative', minHeight: 80 }}
                >
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`piece piece-${i}`}></div>
                    ))}
                    <div
                        className="break-apart-content"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 1,
                            filter: 'blur(2px)',
                            pointerEvents: 'none'
                        }}
                    >
                        {/* Optionally, render faded content here for realism */}
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    key={prob._id}
                    className={cardBaseClass}
                >          
                    {/* <BreakDemo animation='light' key={prob._id} /> */}
                    <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate max-w-xs sm:max-w-md" title={prob.problemId?.title}>{prob.problemId?.title || 'Untitled Problem'}</div>
                        <div className="text-xs text-gray-500 truncate max-w-xs sm:max-w-md">
                            #{prob.problemId?.num} | {prob.problemId?.difficulty} | {prob.categoryTitle}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center flex-shrink-0 mt-2 sm:mt-0">
                        <button
                            onClick={() => handleMarkRevised(selectedReviseList.listId, prob.categoryTitle, prob._id)}
                            className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 whitespace-nowrap"
                        >
                            Mark Revised
                        </button>
                        {prob.problemId?.link && (
                            <a
                                href={prob.problemId.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-xs whitespace-nowrap"
                            >
                                View
                            </a>
                        )}
                        <button
                            onClick={() => {
                                setNoteModalContent({
                                    problemId: prob._id,
                                    initialText: prob.notes,
                                    listId: selectedReviseList.listId,
                                    categoryTitle: prob.categoryTitle
                                })
                                setNoteModalOpen(true)
                            }}
                            className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30"
                            title="View/Edit Notes"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                            </svg>
                        </button>
                    </div>
                </div>
            );
        }
    };

    // --- Render ---
    return (
        <div className={`flex-1 flex flex-col gap-2 rounded-xl p-4 shadow-lg transition-all duration-300 
      ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
                <button
                    className={`px-4 py-2 rounded ${viewMode === 'lists' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('lists')}
                >Lists</button>
                <button
                    className={`px-4 py-2 rounded ${viewMode === 'toRevise' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('toRevise')}
                >To Revise</button>
            </div>

            {/* Lists View */}
            {viewMode === 'lists' && (
                <>
                    <Scrollbar />
                    <div className="flex-1 overflow-hidden">
                        <Dropdown />
                    </div>
                </>
            )}

            {/* To Revise View */}
            {viewMode === 'toRevise' && (
                <div className='h-full'>
                    {/* List Selector */}
                    <div ref={containerRef} className="flex gap-2 overflow-x-auto mb-4">
                        {reviseData.map(list => (
                            <button
                                key={list.listId}
                                ref={el => listRefs.current[list.listId] = el}
                                className={`px-3 py-2 rounded ${selectedReviseListId === list.listId ? 'bg-blue-400 text-white' : 'bg-gray-100'}`}
                                onClick={() => setSelectedReviseListId(list.listId)}
                            >
                                {list.listTitle}
                            </button>
                        ))}
                    </div>
                    {/* Problems to Revise */}
                    {selectedReviseList ? (
                        <div className="flex flex-col max-h-96 overflow-y-auto h-full pr-2 pb-5 gap-2 relative">
                            {selectedReviseList.problems.filter(prob => !prob.revised).length === 0 ? (
                                <div className="text-gray-500">No problems to revise in this list!</div>
                            ) : (
                                <Scroll
                                    items={selectedReviseList.problems.filter(prob => !prob.revised)}
                                    height={"h-1/3"}
                                    renderItem={props => (
                                        <ReviseProblemItem
                                            {...props}
                                            selectedReviseList={selectedReviseList}
                                            handleMarkRevised={handleMarkRevised}
                                            removingProblems={removingProblems}
                                            splitBurnProblems={splitBurnProblems}
                                            setNoteModalContent={setNoteModalContent}
                                            setNoteModalOpen={setNoteModalOpen}
                                        />
                                    )}
                                />
                            )}
                        </div>
                    ) : (
                        <div className="text-gray-400">Select a list to see problems to revise.</div>
                    )}
                </div>
            )}

            {/* Add Category Modal */}
            {tabOpen && (
                <Modal
                    isOpen={tabOpen}
                    onClose={() => setTabOpen(false)}
                    onSubmit={() => {
                        addCategory(currentList?._id, inputVal)
                        setInputVal("")
                        setTabOpen(false)
                        setElevatedCategory(currentList.categories?.length - 1)
                    }}
                    title="Add New Category"
                >
                    <Input
                        label="Category Title"
                        id="category-title"
                        value={inputVal}
                        onChange={(e) => { setInputVal(e.target.value) }}
                        placeholder="Enter category title"
                        autoFocus={true}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addCategory(currentList._id, inputVal)
                                setInputVal("")
                                setTabOpen(false)
                            }
                        }}
                    />
                </Modal>
            )}

            {/* Notes Modal for reviseList */}
            <Notes
                isOpen={noteModalOpen}
                onClose={() => setNoteModalOpen(false)}
                problemId={noteModalContent.problemId}
                initialText={noteModalContent.initialText}
                listId={noteModalContent.listId}
                categoryId={noteModalContent.categoryId || noteModalContent.categoryTitle}
            />
        </div>
    )
}

export default Dolist

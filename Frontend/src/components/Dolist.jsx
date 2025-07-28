import { useState, useEffect, useRef } from 'react'
import Scrollbar from './ProblemsListPart/Scrollbar.jsx'
import Dropdown from './ProblemsListPart/Dropdown.jsx'
import Modal from './common/Modal.jsx'
import Input from './common/Input.jsx'
import { useProblemContext } from '../contexts/ProblemContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { useAuth } from '../contexts/AuthContext.jsx'
import api from '../api.js'
import Notes from './common/Notes.jsx'
import BreakDemo from './AnimationPart/BreakAnimations.jsx'
import Scroll from './common/Scroll.jsx'

const Dolist = () => {
    // --- Contexts ---
    const {
        addCategory, currentList, setElevatedCategory,
        updateProblemRevisedStatus, reviseData, setReviseData,
        setNoteModalOpen, setNoteModalContent, noteModalOpen, noteModalContent,
        setOpenCategory
        , setModalOpen, setFunc, setModalTitle,
        setInputText, setInputLabel, setInputId, setInputType, setInputPlaceHolder, setModalExtra
    } = useProblemContext()
    const { theme, triggerAttack, setAnimationUp, currCharacter, animationUp } = useTheme()
    const { accessToken } = useAuth()
    
    // --- State ---
    const [scale, setScale] = useState(1);
    const [tabOpen, setTabOpen] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const [viewMode, setViewMode] = useState('lists') // 'lists' or 'toRevise'
    const [selectedReviseListId, setSelectedReviseListId] = useState(null)
    const [removingProblems, setRemovingProblems] = useState({})

    // --- Refs ---
    const containerRef = useRef(null)
    const parentRefForBreakAnimationScaling = useRef(null);
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

    const handleMarkRevised = async (listId, categoryTitle, problemId) => {
        setAnimationUp(true);
        triggerAttack()
        setTimeout(() => {
            updateProblemRevisedStatus(listId, categoryTitle, problemId);
        }, currentPack.pack.break.delay || 500);
    }

    // --- Derived Data ---
    const selectedReviseList = reviseData.find(list => list.listId === selectedReviseListId)

    const getCurrentCharacterPack = () => {
        try {
            const userAnimations = localStorage.getItem('userAnimations');
            if (userAnimations) {
                const animations = JSON.parse(userAnimations);
                return animations.find(anim => anim.title === currCharacter) || animations[0];
            }
        } catch (error) {
            console.error('Error getting current character pack:', error);
        }
        return null;
    };


    const currentPack = getCurrentCharacterPack();
    // --- New ReviseProblemItem Component ---
    const ReviseProblemItem = ({ item: prob, selectedReviseList, handleMarkRevised, removingProblems, setNoteModalContent, setNoteModalOpen }) => {
        // Get current character's animation pack from localStorage
        const cardBaseClass = `p-4 bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden`;
        useEffect(() => {
            if (parentRefForBreakAnimationScaling.current) {
                const parentHeight = parentRefForBreakAnimationScaling.current.getBoundingClientRect().height;
                setScale(parentHeight * (3 / 11) / currentPack.pack.break.frameHeight);
            }
        }, [currentPack]);
        // "p-4 bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden w-full min-w-0";
        // const scale = parentRefForBreakAnimationScaling.current.getBoundingClientRect().height * (2 / 9)* currentPack.pack.break.frameHeight;

        return (
            <>
                <div
                    key={prob._id}
                    className={cardBaseClass}
                    style={{
                        height: currentPack.pack.break.frameHeight * scale,
                    }}
                >
                    {animationUp ? (
                        <BreakDemo scale={scale} pack={currentPack} />
                    ):(<>
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
                    </>)}
                </div>
            </>
        );
    };

    // --- Render ---
    return (
        // flex-1 z-10 flex flex-col gap-2 rounded-xl p-4 shadow-lg transition-all duration-300 min-w-0 max-w-3/6
        <div className={`w-2/4 h-full p-4 space-y-2 z-10 rounded-xl shadow-lg transition-all duration-300 min-w-0 max-w-3/6
      ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>
            {/* Tabs */}
            <div className="h-1/12 flex gap-2">
                <button
                    className={`px-4 py-2 rounded-xl ${viewMode === 'lists' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('lists')}
                >Lists</button>
                <button
                    className={`px-4 py-2 rounded-xl ${viewMode === 'toRevise' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('toRevise')}
                >To Revise</button>
            </div>

            {/* Content Container - Fixed height and width */}
            <div className="h-11/12 min-h-0 overflow-hidden w-full">
                {/* Lists View */}
                {viewMode === 'lists' && (
                    <div className="h-full flex flex-col">
                        <div className="h-1/7">
                            <Scrollbar />
                        </div>
                        <div className="h-5/7">
                            <Dropdown />
                        </div>
                        <button onClick={handleAdd} className='w-full h-1/7 rounded-xl text-black bg-amber-300'>
                            Add New Category
                        </button>
                    </div>
                )}

                {/* To Revise View */}
                {viewMode === 'toRevise' && (
                    <div className="h-full flex flex-col min-h-0">
                        {/* List Selector */}
                        <div ref={containerRef} className="h-1/9 m-3 flex gap-2 overflow-x-auto flex-shrink-0">
                            {reviseData.map(list => (
                                <button
                                    key={list.listId}
                                    ref={el => listRefs.current[list.listId] = el}
                                    className={`px-3 py-2 rounded flex-shrink-0 ${selectedReviseListId === list.listId ? 'bg-blue-400 text-white' : 'bg-gray-100'}`}
                                    onClick={() => setSelectedReviseListId(list.listId)}
                                >
                                    {list.listTitle}
                                </button>
                            ))}
                        </div>
                        {/* Problems to Revise */}
                        {selectedReviseList ? (
                            <div className="relative h-8/9 min-h-0 overflow-y-auto pr-2">
                                {selectedReviseList.problems.filter(prob => !prob.revised).length === 0 ? (
                                    <div className="text-gray-500">No problems to revise in this list!</div>
                                ) : (
                                    <div ref={parentRefForBreakAnimationScaling} className="h-full w-full">
                                        <Scroll
                                            items={selectedReviseList.problems.filter(prob => !prob.revised)}
                                            width={currentPack.pack.break.frameWidth * scale}
                                            renderItem={props => (
                                                <ReviseProblemItem
                                                    {...props}
                                                    selectedReviseList={selectedReviseList}
                                                    handleMarkRevised={handleMarkRevised}
                                                    removingProblems={removingProblems}
                                                    setNoteModalContent={setNoteModalContent}
                                                    setNoteModalOpen={setNoteModalOpen}
                                                />
                                            )}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-gray-400">Select a list to see problems to revise.</div>
                        )}
                    </div>
                )}
            </div>

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

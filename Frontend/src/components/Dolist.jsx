import { useState, useMemo, useCallback,useRef,useEffect } from 'react';

// --- Imports ---
// Hooks
import { useProblemContext } from '../contexts/ProblemContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { useReviseData } from '../hooks/useReviseData.js'; // Custom Hook'

// Components
import Scrollbar from './ProblemsListPart/Scrollbar.jsx';
import Dropdown from './ProblemsListPart/Dropdown.jsx';
import Notes from './common/Notes.jsx';
import Scroll from './common/Scroll.jsx';
import ReviseProblemItem from './ProblemsListPart/ReviseProblemItem.jsx'
import { useSpriteAnimation } from '../contexts/SpriteAnimationContext.jsx';

const Dolist = () => {
    // --- Contexts ---
    const {
        currentList,
        updateProblemRevisedStatus,
        setNoteModalOpen,
        noteModalOpen,
        setNoteModalContent,
        noteModalContent,
        setModalTitle,
        setFunc,
        setInputLabel,
        setInputId,
        setInputPlaceHolder,
        setInputType,
        setModalExtra,
        setModalOpen,
        // Omitting other context setters for brevity, assuming they are used in extracted components
    } = useProblemContext();
    const { theme } = useTheme();
    const {currCharacter,triggerAttack} = useSpriteAnimation();

    // --- State ---
    const [viewMode, setViewMode] = useState('lists'); // 'lists' or 'toRevise'
    const [selectedReviseListId, setSelectedReviseListId] = useState(null);
    const [scale, setScale] = useState(1);

    // Animation-related state
    const [animatingProblemId, setAnimatingProblemId] = useState(null);
    const [hidingProblemId, setHidingProblemId] = useState(null);
    useEffect(() => {
      setCurrentPack(getCurrentCharacterPack());
    }, [currCharacter])
    
    const [currentPack,setCurrentPack] = useState(getCurrentCharacterPack());

    // --- Custom Hooks ---
    const { reviseData, refetch } = useReviseData(viewMode);

    // --- Derived Data (Memoized) ---
    const selectedReviseList = useMemo(() => {
        return reviseData.find(list => list.listId === selectedReviseListId);
    }, [reviseData, selectedReviseListId]);

    // --- Refs ---
    const parentRef = useRef(null);

    // --- useEffects ---
    useEffect(() => {
        if (parentRef.current && currentPack) {
            const parentHeight = parentRef.current.getBoundingClientRect().height;
            // Calculate scale based on parent height and animation frame height
            setScale(parentHeight * (3 / 11) / currentPack.pack.break.frameHeight);
        }
    }, [currentPack]);

    // --- Callbacks (Memoized) ---
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
    function getCurrentCharacterPack () {
        try {
            const allAnimations = localStorage.getItem('allAnimations');
            if (!allAnimations) return null;
            const animations = JSON.parse(allAnimations);
            return animations.find(anim => anim.title === currCharacter) || animations[0];
        } catch (error) {
            console.error('Error getting current character pack:', error);
            return null;
        }
    };

    const handleOpenNotes = (problem) => {
        console.log("Opening notes for problem:",problem)
        if(!selectedReviseList)
            return;
        setNoteModalContent({
            problemId: problem._id,
            initialText: problem.notes,
            listId: selectedReviseList.listId,
            categoryId: problem.categoryId,
            update: true,
        });
        setNoteModalOpen(true);
    }
    const handleMarkRevised = useCallback((listId, categoryTitle, problemId) => {
        const anim = currentPack;
        const delay = anim.pack.break.frames / anim.pack.break.fps;
        console.log(anim);

        setAnimatingProblemId(problemId);
        triggerAttack();

        setTimeout(() => {
            setHidingProblemId(problemId);
            updateProblemRevisedStatus(listId, categoryTitle, problemId);
            setAnimatingProblemId(null);
        }, delay*1000 - 100);

    }, [updateProblemRevisedStatus,currentPack,triggerAttack]);


    // --- Render ---
    return (
        <div className={`w-2/4 h-full p-4 space-y-2 z-10 rounded-xl shadow-lg transition-all duration-300 min-w-0 max-w-3/6
    ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-white dark:bg-gray-800'}`}>
            {/* Tabs */}
            <div className="h-1/12 flex gap-2">
                <button onClick={() => setViewMode('lists')} className={`px-4 py-2 rounded-xl ${viewMode === 'lists' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}>Lists</button>
                <button onClick={() => setViewMode('toRevise')} className={`px-4 py-2 rounded-xl ${viewMode === 'toRevise' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}>To Revise</button>
            </div>

            {/* Content Container */}
            <div className="h-11/12 min-h-0 overflow-hidden w-full">
                {viewMode === 'lists' && (
                    <div className="h-full flex flex-col">
                        <div className="h-1/7"><Scrollbar /></div>
                        <div className="h-5/7"><Dropdown /></div>
                        <button onClick={handleAdd} className='w-full h-1/7 rounded-xl text-black bg-amber-300'>Add New Category</button>
                    </div>
                )}

                {viewMode === 'toRevise' && (
                    <div className="h-full flex flex-col min-h-0">
                        {/* List Selector */}
                        <div className="h-1/9 m-3 flex gap-2 overflow-x-auto flex-shrink-0">
                            {reviseData.map(list => (
                                <button key={list.listId} onClick={() => setSelectedReviseListId(list.listId)} className={`px-3 py-2 rounded flex-shrink-0 ${selectedReviseListId === list.listId ? 'bg-blue-400 text-white' : 'bg-gray-100'}`}>
                                    {list.listTitle}
                                </button>
                            ))}
                        </div>

                        {/* Problems to Revise */}
                        {selectedReviseList ? (
                            <div ref={parentRef} className="relative h-8/9 min-h-0 overflow-y-auto pr-2">
                                <Scroll
                                    items={selectedReviseList.problems.filter(prob => !prob.revised)}
                                    width={currentPack.pack.break.frameWidth * scale}
                                    renderItem={({ item,handleClick }) => (
                                        <ReviseProblemItem
                                            handleClick={handleClick}
                                            key={item._id}
                                            item={item}
                                            listId={selectedReviseList.listId}
                                            categoryTitle={item.categoryTitle}
                                            onMarkRevised={handleMarkRevised}
                                            onOpenNotes={handleOpenNotes}
                                            isAnimating={animatingProblemId === item._id}
                                            isHiding={hidingProblemId === item._id}
                                            currentPack={currentPack}
                                            scale={scale}
                                        />
                                    )}
                                />
                            </div>
                        ) : (
                            <div className="text-gray-400">Select a list to see problems.</div>
                        )}
                    </div>
                )}
            </div>

            <Notes
                isOpen={noteModalOpen}
                onClose={() => setNoteModalOpen(false)}
                {...noteModalContent}
                refetch = {refetch}
            />
        </div>
    );
};

export default Dolist;
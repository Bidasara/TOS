import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { useSpriteAnimation } from '../contexts/SpriteAnimationContext.jsx';
import { useReviseData } from '../hooks/useReviseData.js';
import { useProblemContext } from '../contexts/ProblemContext.jsx';
import Scroll from './common/Scroll.jsx';
import ReviseProblemItem from './ProblemsListPart/ReviseProblemItem.jsx'
import { useNoteModal } from '../contexts/NoteModalContext.jsx';

const ReviseList = ({ viewMode, parentRef }) => {
    const [animatingProblemId, setAnimatingProblemId] = useState(null);
    const [hidingProblemId, setHidingProblemId] = useState(null);
    const [currentPack, setCurrentPack] = useState(() => getCurrentCharacterPack());
    const { reviseData, refetch } = useReviseData(viewMode);
    const [selectedReviseListId, setSelectedReviseListId] = useState(null);
    const [scale, setScale] = useState(5);
    const { currCharacter, triggerAttack } = useSpriteAnimation();
    const { updateProblemRevisedStatus } = useProblemContext();
    const { setNoteModalContent, setNoteModalOpen } = useNoteModal();

    function getCurrentCharacterPack() {
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

    const handleOpenNotes = async (problem) => {
        try {
            const freshReviseData = await refetch();
            const list = freshReviseData.find(l => l.listId === selectedReviseListId);
            if (!list) {
                console.error('List not found');
                return;
            }
            const updatedProblem = list.problems
                .find(p => p.categoryId === problem.categoryId && p._id === problem._id);

            if (!updatedProblem) {
                console.error("Updated problem not found after refetch.");
                return;
            }
            setNoteModalContent({
                problemId: updatedProblem._id,
                initialText: updatedProblem.notes,
                listId: list.listId,
                categoryId: updatedProblem.categoryId,
                update: true,
            });

            // Open the modal only after all the data is ready
            setNoteModalOpen(true)
        } catch (error) {
            console.error('Error fetching revise data:', error);
        }
    }
    const handleMarkRevised = useCallback(async (listId, categoryTitle, problemId) => {
        if (animatingProblemId)
            return;
        setAnimatingProblemId(problemId);
        triggerAttack();
        const anim = currentPack;
        const delay = anim.pack.break.frames / anim.pack.break.fps;

        await new Promise(resolve => setTimeout(resolve, delay * 1000 - 100));

        setHidingProblemId(problemId);
        await updateProblemRevisedStatus(listId, categoryTitle, problemId);
        refetch()
        setAnimatingProblemId(null);

    }, [updateProblemRevisedStatus, currentPack, triggerAttack, refetch]);

    useEffect(() => {
        if (currentPack) {
            const parentHeight = parentRef.current.getBoundingClientRect().height;
            setScale(parentHeight * (3 / 13) / currentPack.pack.break.frameHeight);
        }
    }, [currentPack]);

    // Animation-related state
    useEffect(() => {
        setCurrentPack(getCurrentCharacterPack());
    }, [currCharacter])
    // --- Derived Data (Memoized) ---
    const selectedReviseList = useMemo(() => {
        return reviseData.find(list => list.listId === selectedReviseListId);
    }, [reviseData, selectedReviseListId]);

    return (
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
                <div className="relative h-8/9 min-h-0 overflow-y-auto pr-2">
                    <Scroll
                        items={selectedReviseList.problems.filter(prob => !prob.revised)}
                        width={currentPack.pack.break.frameWidth * scale}
                        renderItem={({ item, handleClick }) => (
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
    )
}

export default ReviseList

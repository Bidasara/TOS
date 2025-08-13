import { memo, useState, useEffect, useRef } from 'react';
import BreakDemo from '../AnimationPart/BreakAnimations.jsx';

const ReviseProblemItem = ({
    handleClick,
    item: prob,
    listId,
    categoryTitle,
    onMarkRevised,
    onOpenNotes,
    isAnimating,
    isHiding,
    currentPack,
    scale
}) => {

    if (!currentPack) {
        // Fallback rendering if animation pack is not available
        return <div>Loading animations...</div>;
    }
    
    const cardBaseClass = `p-4 bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-300 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden`;

    return (
        <div
            onClick={()=>handleClick(prob)}
            className={cardBaseClass}
            style={{
                height: currentPack.pack.break.frameHeight * scale,
                opacity: isHiding ? 0 : 1,
            }}
        >
            {isAnimating ? (
                <BreakDemo scale={scale} pack={currentPack} />
            ) : (
                <>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate max-w-xs sm:max-w-md" title={prob.problemId?.title}>
                            {prob.problemId?.title || 'Untitled Problem'}
                        </p>
                        <p className="text-xs text-gray-500 truncate max-w-xs sm:max-w-md">
                            #{prob.problemId?.num} | {prob.problemId?.difficulty} | {categoryTitle}
                        </p>
                    </div>
                    <div className="flex gap-2 items-center flex-shrink-0 mt-2 sm:mt-0">
                        <button
                            disabled={isAnimating}
                            onClick={() => onMarkRevised(listId, categoryTitle, prob._id)}
                            className={`text-xs px-2 py-1 rounded bg-green-100 text-green-800 whitespace-nowrap ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Mark Revised
                        </button>
                        {prob.problemId?.link && (
                            <a href={prob.problemId.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs whitespace-nowrap">
                                View
                            </a>
                        )}
                        <button onClick={() => onOpenNotes(prob)} className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30" title="View/Edit Notes">
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                             </svg>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

// Memoize the component to prevent re-renders when props haven't changed
export default memo(ReviseProblemItem);
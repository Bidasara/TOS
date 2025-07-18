import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useProblemContext } from '../../contexts/ProblemContext.jsx';

const CategoryScroll = ({ containerRef, setProblemScroll }) => {
    const { currentList, data, elevatedCategory, setElevatedCategory, openCategory, setOpenCategory, deleteCategory } = useProblemContext();
    const { theme } = useTheme();
    const categoryRefs = useRef({}); // Ref for individual category elements for Intersection Observer

    const toggleCategory = useCallback((category) => {
        setOpenCategory(prev => (prev?._id === category._id) ? null : category);
        setProblemScroll(prev => !prev);
    }, [setOpenCategory, setProblemScroll]);

    // This function should be attached to onWheel, not onScroll

    const categories = useMemo(() => {
        return data?.lists.find(list => list?._id === currentList?._id)?.categories || [];
    }, [data, currentList?._id]);

    const handleDelete = useCallback((listId, categoryId, event) => {
        event.stopPropagation(); // Prevent the click from bubbling up to toggleCategory
        if (!window.confirm('Are you sure you want to delete this category? This action cannot be undone.')) return;
        deleteCategory(listId, categoryId)
            .then(() => {
                console.log(`Category ${categoryId} deleted successfully`);
            })
            .catch(err => {
                console.error(`Error deleting category ${categoryId}:`, err);
                alert(`Failed to delete category: ${err.message || 'Unknown error'}`);
            });
    }, [deleteCategory]);

    useEffect(() => {
        if (!containerRef.current) {
            console.warn('Container ref is not set for IntersectionObserver root.');
            return;
        }

        const options = {
            root: containerRef.current, // Assuming containerRef is the actual scrollable root for IO
            rootMargin: '-50% 0px -50% 0px', // Centers the "active" area
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const categoryid = entry.target.dataset.categoryId;
                    // Only update if it's a new elevated category to prevent unnecessary re-renders
                    setElevatedCategory(previd => (previd === categoryid) ? previd : categoryid);
                }
            });
        }, options);

        // Observe all category elements
        categories.forEach(category => {
            const ref = categoryRefs.current[category._id];
            if (ref) {
                observer.observe(ref);
            }
        });

        // Cleanup function for useEffect
        return () => {
            observer.disconnect();
        };
    }, [containerRef, categories, setElevatedCategory]); // Dependencies for useEffect

    return (
        <div
            className={`flex gap-3 flex-col items-center justify-center rounded-lg transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-pink-500' : ''}`}
        >
            <div className="h-[20vh]"></div>
            {/* Code for when currentList.categories is undefined or empty */}
            {!data?.lists.find(list => list?._id === currentList?._id)?.categories?.length && (
                <div className={`text-center py-10 ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-14 w-14 mx-auto mb-3 ${theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-400 dark:text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="mt-2 text-base font-medium">No categories</h3>
                    <p className="mt-1 text-sm">Get started by creating a new category.</p>
                </div>
            )}
            {categories.map((category) => ( // Use the `categories` from useMemo for cleaner access
                <div
                    key={category._id}
                    ref={el => categoryRefs.current[category._id] = el}
                    data-category-id={category._id}
                    onClick={() => toggleCategory(category)}
                    className={`h-14 px-4 rounded-lg cursor-pointer font-medium flex justify-between items-center transition-all duration-200 shadow-sm
                        ${theme === 'cyberpunk'
                            ? `${category._id === openCategory?._id
                                ? 'bg-black bg-opacity-90 border-2 border-pink-500 neon-text text-pink-400'
                                : `${elevatedCategory && category._id === elevatedCategory
                                    ? 'bg-black bg-opacity-80 w-10/12 border-2 border-cyan-400 neon-text text-cyan-400'
                                    : 'bg-black bg-opacity-60 w-8/12 border border-cyan-700 neon-text text-cyan-300 opacity-70'}
                                hover:bg-black hover:bg-opacity-80`}`
                            : `${category._id === openCategory?._id
                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                                : `${elevatedCategory && category._id === elevatedCategory
                                    ? 'bg-gray-50 dark:bg-gray-800 w-10/12 shadow-xl'
                                    : 'bg-gray-200 dark:bg-gray-700/50 w-8/12 opacity-70'}
                                hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-300`}`
                        }`}
                >
                    {/* delete icon */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span onClick={(event) => handleDelete(currentList._id, category._id, event)} className="material-symbols-outlined">
                            delete
                        </span>
                        <span className={`text-sm truncate ${theme === 'cyberpunk' ? 'text-cyan-300 neon-text' : ''}`}>{category.title}</span>
                        <span className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-md ${theme === 'cyberpunk' ? 'bg-black border border-cyan-400 text-cyan-400' : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'} shrink-0`}>
                            {category.problems.length}
                        </span>
                    </div>

                    {/* the arrow svg that rotated by 0 or 180 whenever clicked */}
                    <span className={`transition-transform duration-300 shrink-0 ml-2 ${theme === 'cyberpunk' ? 'text-pink-400 neon-text' : ''}`} style={{ transform: openCategory?._id === category._id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </div>
            ))}
            <div className="h-[20vh]"></div>
        </div>
    );
};

export default CategoryScroll;
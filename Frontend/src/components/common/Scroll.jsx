import React, { useRef, useEffect, useState } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext';

const Scroll = ({ items, renderItem: ItemComponent, height, width, openCategory: open, setOpenCategory: setOpen = () => { }, elevatedProblem, setElevatedProblem, heightForProblem = null }) => {
    const { currentList,data } = useProblemContext();
    const containerRef = useRef(null);
    const itemRef = useRef({});
    const [localElevate, setLocalElevate] = useState(null); // Changed initial state to null

    function moveToCenter(id) {
        const node = itemRef.current[id];
        if (!node) return;
        const container = containerRef.current;
        if (!container) return;

        const containerHeight = container.clientHeight;
        const nodeHeight = node.clientHeight;
        const scrollTop = node.offsetTop - (containerHeight / 2) + (nodeHeight / 2);

        container.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const handleWheel = (e) => {
            e.preventDefault();
            // Your custom scroll logic here
            node.scrollTop += e.deltaY / 4;
        };

        node.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            node.removeEventListener('wheel', handleWheel);
        };
    }, []);
    useEffect(() => {
        if (!containerRef.current || !itemRef?.current) return;

        const options = {
            root: containerRef.current,
            rootMargin: '-35% 0px -35% 0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.dataset.id;
                    if (setElevatedProblem) {
                        setElevatedProblem(id);
                    } else {
                        setLocalElevate(id);
                    }
                }
            })
        }, options);

        Object.values(itemRef.current).forEach(ref => {
            if (ref) observer.observe(ref);
        })

        return () => {
            observer.disconnect();
        }
    }, [containerRef, items, open, setElevatedProblem])
    const handleClick = (item) => {
        if (heightForProblem == null) {
            setOpen(prev => {
                if (!prev) {
                    localStorage.setItem(`openCategory_${currentList._id}`, `${item._id}`)
                    return item._id;
                }
                localStorage.removeItem(`openCategory_${currentList._id}`)
                return null;
            }
            );
            moveToCenter(item._id);
        }
    }
    const elevate = elevatedProblem !== undefined ? elevatedProblem : localElevate;
    return (
        <div ref={containerRef} className={`w-full ${heightForProblem || "h-full"} overflow-auto transition-all duration-300 scroll-container`}>
            {(items && items.length && !open) ? (<div className='h-1/2'></div>) : (<></>)}
            {(!items || !items.length) ? (
                <div className="flex w-full h-full justify-center items-center p-8" style={{ fontSize: 'var(--text-base)' }}>
                    {(data === null || data.lists === null || data.lists.length === 0)? (
                        <div className="text-center max-w-md mx-auto">
                            {/* Icon or illustration */}
                            <div className="mb-6">
                                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Your list is empty
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Get started by creating your first problem list or adding lists from our library.
                            </p>

                            {/* Action steps */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                        1
                                    </div>
                                    <div>
                                        <p className="text-gray-700">
                                            Create a new list from the <span className="font-medium text-blue-600">Quick View</span> the right
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                        2
                                    </div>
                                    <div>
                                        <p className="text-gray-700">
                                            Add lists from the <span className="font-medium text-blue-600">Library</span> in the navigation panel
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : heightForProblem ? (
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3.5a2 2 0 00-1.5.64l-.5.36a2 2 0 01-2 0l-.5-.36a2 2 0 00-1.5-.64H8.5a2 2 0 00-1.5.64l-.5.36a2 2 0 01-2 0l-.5-.36a2 2 0 00-1.5-.64H4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No items to show</h3>
                            <p className="text-gray-500">Try adding a Problem</p>
                        </div>
                    ): width ? (
                        <div className="text-center max-w-md mx-auto">
                            {/* Icon or illustration */}
                            <div className="mb-6">
                                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Your Revise list is empty
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Get started by solving your first problem.
                            </p>

                            {/* Action steps */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                        1
                                    </div>
                                    <div>
                                        <p className="text-gray-700">
                                            You can check your todo revise list in the <span className="font-medium text-blue-600">Dashboard</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-left">
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                        2
                                    </div>
                                    <div>
                                        <p className="text-gray-700">
                                            Add problems for revision directly using the <span className="font-medium text-blue-600">Add</span> button at the bottom right corner.
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-3.5a2 2 0 00-1.5.64l-.5.36a2 2 0 01-2 0l-.5-.36a2 2 0 00-1.5-.64H8.5a2 2 0 00-1.5.64l-.5.36a2 2 0 01-2 0l-.5-.36a2 2 0 00-1.5-.64H4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No items to show</h3>
                            <p className="text-gray-500">Try adding a category</p>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {items.filter(item => open == null ? true : item._id === open).map((item, idx) => (
                        <div
                            ref={el => itemRef.current[item._id] = el}
                            data-id={item._id}
                            key={item._id}
                            className={`${open ? "h-full" : height} ${elevate === item._id ? `w-10/12` : `w-8/12`} mx-auto relative`}
                            style={{
                                paddingTop: 'calc(0.375 * var(--unit))',
                                paddingBottom: 'calc(0.375 * var(--unit))',
                                ...(width ? {
                                    width: elevate === item._id ? `calc(${width / 16} * var(--unit))` : `calc(${(width - 70) / 16} * var(--unit))`
                                } : {})
                            }}
                        >
                            <ItemComponent handleClick={handleClick} item={item} elevate={elevate} open={open} />
                        </div>
                    ))}
                </>
            )}
            {(items && items.length && !open) ? (<div className='h-1/2'></div>) : (<></>)}
        </div>
    )

}

export default Scroll
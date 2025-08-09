import React, { useRef, useEffect, useState } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext';

const Scroll = ({ items, renderItem: ItemComponent, height, width, openCategory: open, setOpenCategory: setOpen = () => { }, elevatedProblem, setElevatedProblem, heightForProblem = null }) => {
    const { currentList } = useProblemContext();
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
            {(!items || !items.length) ? (<div className='flex w-full h-full justify-center items-center'>No items to show</div>) : (
                <>
                    {items.filter(item => open == null ? true : item._id === open).map((item, idx) => (
                        <div
                            ref={el => itemRef.current[item._id] = el}
                            data-id={item._id}
                            key={item._id}
                            className={`${open ? "h-full" : height} ${elevate === item._id ? `w-10/12` : `w-8/12`} py-1.5 mx-auto relative`}
                            style={width ? { width: elevate === item._id ? `${width}px` : `${width - 70}px` } : {}}
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
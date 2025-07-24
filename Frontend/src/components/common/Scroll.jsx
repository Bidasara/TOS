import React, { useRef, useEffect, useState } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext';

const Scroll = ({ items, renderItem: ItemComponent, height, openCategory: open, setOpenCategory: setOpen = () => {}, elevatedProblem, setElevatedProblem }) => {
    const { currentList } = useProblemContext();
    const containerRef = useRef(null);
    const itemRef = useRef({});
    const [localElevate, setLocalElevate] = useState(null); // Changed initial state to null
    
    
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
    const elevate = elevatedProblem !== undefined ? elevatedProblem : localElevate;
    return (
        <div ref={containerRef} className={`w-full h-10/12 overflow-auto transition-all duration-300 scroll-container`}>
            {(items && items.length && !open) ? (<div className='h-1/2'></div>) : (<></>)}
            {(!items || !items.length) ? (<div className='flex w-full h-full justify-center items-center'>No items to show</div>) : (
                <>
                    {items.filter(item => open == null ? true : item._id === open).map(item => (
                        <div
                            ref={el => itemRef.current[item._id] = el}
                            data-id={item._id}
                            key={item._id}
                            onClick={() => {
                                setOpen(prev => {if(!prev){
                                    localStorage.setItem(`openCategory_${currentList._id}`,`${item._id}`)
                                    console.log(item._id)
                                    return item._id;
                                } 
                                    localStorage.removeItem(`openCategory_${currentList._id}`)
                                    return null;}
                                );
                            }}
                            className={`${open ? "h-full" : height} ${elevate === item._id ? "w-10/12" : "w-8/12"} mx-auto py-1.5 relative`}
                        >
                            <ItemComponent item={item} elevate={elevate} open={open} />
                        </div>
                    ))}
                </>
            )}
            {(items && items.length && !open) ? (<div className='h-1/2'></div>) : (<></>)}
        </div>
    )
}

export default Scroll
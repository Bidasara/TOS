import React, { useState, useRef, useEffect } from 'react';
import CategoryScroll from './CategoryScroll.jsx';
import ProblemsScroll from './ProblemsScroll.jsx';
import { useProblemContext } from '../../contexts/ProblemContext.jsx';
import { useTheme } from '../../contexts/ThemeContext';

const Dropdown = (props) => {
    const { currentList} = useProblemContext();
    const { theme } = useTheme();
    // Hooks
    const [problemScroll, setProblemScroll] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
      setProblemScroll(false)
    }, [currentList?._id])
    
    // Update openCategory when currentList changes

    return (
        <div ref={containerRef} className={`w-full h-full overflow-y-auto overflow-x-hidden scroll-container rounded-lg transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border border-cyan-400' : ''}`}>
            {!problemScroll && 
                <CategoryScroll
                    key={currentList?._id}
                    containerRef={containerRef}  
                    setProblemScroll={setProblemScroll}
                />}
            {problemScroll && <ProblemsScroll 
                setProblemScroll={setProblemScroll}
            />}
        </div>
    );
};

export default Dropdown;
import { useState, useEffect ,useCallback} from 'react';
import { useProblemContext } from '../../contexts/ProblemContext';
import { useTheme } from '../../contexts/ThemeContext';
import Checkbox from '../common/Checkbox';

const Problem = ({ item:problem,elevate:elevatedProblem }) => {
    const { updateProblemStatus, setNoteModalOpen, setNoteModalContent, updateProblemRevisedStatus, deleteProblem,openCategory,currentList, setElevatedProblem,setOpenCategory } = useProblemContext();
    const { theme } = useTheme();
    const [checked, setChecked] = useState(problem.solved === true);
    const [showNotes, setShowNotes] = useState(false);
    const [notes, setNotes] = useState(problem.notes || '');
    const [revised, setRevised] = useState(problem.revised === true);

    useEffect(() => {
        setChecked(problem.solved === true);
        setNotes(problem.notes || '');
        setRevised(problem.revised === true);
    }, [problem.solved, problem.notes, problem.revised]);

    //Functions
    const handleChange = (e, listId, categoryId, problemId, initialText,hint) => {
        if (checked) return;
        const isChecked = e.target.checked;
        setNoteModalContent({ problemId, initialText, listId, categoryId ,hints:hint});
        setNoteModalOpen(true);
    };

    const handleDelete = useCallback((listId, categoryId,problemId ,event) => {
            // Prevent the click from bubbling up to the category toggle
            event.stopPropagation();
            
            if (window.confirm('Are you sure you want to delete this problem? This action cannot be undone.')) {
                deleteProblem(listId, categoryId,problemId)
                    .then(() => {
                        console.log(`Problem ${problemId}, in category ${categoryId}, in list ${listId} deleted successfully`);
                    })
                    .catch(err => {
                        console.error(`Error deleting category ${categoryId}:`, err);
                        // You could add a toast notification here
                        alert(`Failed to delete category: ${err.message || 'Unknown error'}`);
                    });
            }
        }, [deleteProblem]);

    //Maps
    const getDifficultyStyles = (difficulty) => {
        const base = "text-xs font-medium px-2.5 py-0.5 rounded-md";
        if (theme === 'cyberpunk') {
            switch (difficulty.toLowerCase()) {
                case 'easy':
                    return `${base} bg-black border border-green-400 text-green-400 neon-text`;
                case 'medium':
                    return `${base} bg-black border border-yellow-400 text-yellow-300 neon-text`;
                case 'hard':
                    return `${base} bg-black border border-pink-500 text-pink-400 neon-text`;
                default:
                    return `${base} bg-black border border-cyan-400 text-cyan-300 neon-text`;
            }
        }
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return `${base} bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300`;
            case 'medium':
                return `${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300`;
            case 'hard':
                return `${base} bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300`;
            default:
                return `${base} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300`;
        }
    };

    return (
        <div
            className={`group mb-2 transition-all duration-300 h-full mx-auto
            ${problem._id != elevatedProblem
                    ? (theme === 'cyberpunk' ? 'pointer-events-none opacity-40 blur-[0.5px] bg-black bg-opacity-60 neon-text' : 'pointer-events-none opacity-40 blur-[0.5px] bg-gray-100 dark:bg-gray-800/50')
                    : 'opacity-100 blur-0'}
            ${checked ? (theme === 'cyberpunk' ? 'bg-black bg-opacity-90 border-pink-500 neon-text' : 'bg-green-50 dark:bg-green-900/20') : (theme === 'cyberpunk' ? 'bg-black bg-opacity-80 border-cyan-400 neon-text' : 'bg-white dark:bg-gray-800')}
            ${problem._id === elevatedProblem
                    ? `w-11/12 scale-105 shadow-xl z-10 ring-2 ${theme === 'cyberpunk' ? 'ring-pink-500' : 'ring-indigo-200 dark:ring-indigo-700'}`
                    : 'w-10/12 scale-100'}
            border rounded-lg px-4 flex justify-between items-center shadow-sm
            hover:shadow-md transition-all duration-200
            hover:border-indigo-200 dark:border-gray-700 dark:hover:border-indigo-700
            ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2' : ''}`}
        >
            <div className='flex items-center gap-3 flex-1 min-w-0'>
                <Checkbox
                    id={`problem-${problem._id}`}
                    checked={checked}
                    onChange={(e) => handleChange(e, currentList._id, openCategory, problem._id, problem.notes,problem.problemId.hint)}
                />
                <div className="min-w-0 flex-1">
                    <div className={`text-sm font-medium truncate ${checked
                        ? (theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-500 line-through dark:text-gray-400')
                        : (theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-gray-200')}`}>
                        {problem.problemId.num}. {problem.problemId.title}
                    </div>
                    <div className="flex mt-1 items-center gap-2">
                        <span className={getDifficultyStyles(problem?.problemId.difficulty)}>
                            {problem.problemId.difficulty}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div
                    className={`text-xs px-2 py-1 rounded transition-colors border ${problem.revised ? (theme === 'cyberpunk' ? 'bg-pink-700 text-pink-200 border-pink-400 neon-text' : 'bg-blue-200 text-blue-800 border-blue-400 dark:bg-blue-900/40 dark:text-blue-200') : (theme === 'cyberpunk' ? 'bg-black text-cyan-400 border-cyan-400 neon-text' : 'bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-700/40 dark:text-gray-300')}`}
                >
                    {problem.revised ? 'Revised' : 'Revise'}
                </div>
                {/* <button
                    onClick={() => {
                        setNoteModalContent({ problemId: problem._id, initialText: problem.notes, listId: currentList._id, categoryId: openCategory,hints:problem.problemId.hint});
                        setNoteModalOpen(true);
                        setElevatedProblem && setElevatedProblem(problem._id);
                    }}
                    className={`p-1.5 rounded-full transition-colors ${theme === 'cyberpunk' ? 'text-pink-400 hover:bg-pink-900/30 neon-text' : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30'}`}
                    title="View/Edit Notes"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                    </svg>
                </button> */}
                <span onClick={(event) => handleDelete(currentList._id, openCategory,problem._id ,event)} className="material-symbols-outlined delete-icon">
                    delete
                </span>
            </div>
        </div>
    );
};

export default Problem;
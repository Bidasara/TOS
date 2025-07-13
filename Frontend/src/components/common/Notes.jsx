import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useProblemContext } from '../../contexts/ProblemContext';

const NoteModal = ({ isOpen, onClose, problemId, initialText = '', listId, categoryId }) => {
    const ref = useRef(null);
    const { theme } = useTheme();
    const {updateProblemStatus} = useProblemContext();

    useEffect(() => {
        if (isOpen && ref.current) {
            ref.current.innerText = initialText || '-';
        }
    }, [isOpen, initialText]);

    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        // Handle Enter for bulleting
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const selection = window.getSelection();
            if (!selection.rangeCount) return;
            const range = selection.getRangeAt(0);
            const bullet = document.createTextNode('\n- ');
            range.deleteContents();
            range.insertNode(bullet);
            // Move cursor after the bullet
            range.setStartAfter(bullet);
            range.setEndAfter(bullet);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        // Bold
        if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            document.execCommand('bold');
        }
        // Underline
        if (e.key === 'u' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            document.execCommand('underline');
        }
    };

    const handleSubmit = () => {
        if (ref.current) {
            updateProblemStatus(listId,categoryId, problemId,ref.current.innerText);
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div
            className={`z-50 fixed inset-0 flex items-center justify-center p-4 sm:p-8 transition-all duration-300 backdrop-blur-md
                ${theme === 'cyberpunk'
                    ? 'bg-black/80'
                    : 'bg-black/30'}
            `}
        >
            <div
                className={`relative w-full max-w-lg mx-auto rounded-xl shadow-2xl border-4 p-6 sm:p-8 flex flex-col
                    ${theme === 'cyberpunk'
                        ? 'border-pink-500 bg-black cyberpunk-bg neon-text'
                        : 'border-gray-500 bg-gray-100'}
                `}
            >
                <h2
                    className={`text-3xl font-bold mb-4 text-center ${theme === 'cyberpunk'
                        ? 'text-cyan-400 neon-text drop-shadow-cyber'
                        : 'text-black'}
                    `}
                >
                    Notes
                </h2>

                <div
                    ref={ref}
                    contentEditable
                    onKeyDown={handleKeyDown}
                    suppressContentEditableWarning
                    placeholder="- Start your Notes..."
                    className={`w-full min-h-[160px] max-h-60 sm:max-h-80 p-4 rounded-lg font-mono text-lg border-2 overflow-y-auto resize-y
                        ${theme === 'cyberpunk'
                            ? 'bg-black bg-opacity-80 text-pink-400 border-cyan-400 focus:outline-none focus:ring-2 shadow-cyber focus:ring-pink-500 cyberpunk-textarea'
                            : 'bg-white bg-opacity-80 text-black border-blue-700'}
                    `}
                    style={{
                        boxShadow:
                            theme === 'cyberpunk'
                                ? '0 0 16px 2px #ff00cc, 0 0 32px 4px #00fff7'
                                : '',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                </div>
                <div className='flex flex-col sm:flex-row justify-end gap-3 mt-6'>
                    <button
                        className={`py-2 px-4 rounded-lg font-semibold transition-all 
                            ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-red-400 text-white hover:bg-red-600'}`}
                        onClick={onClose}
                    >Cancel</button>
                    <button
                        className={`py-2 px-4 rounded-lg font-semibold transition-all
                            ${theme === 'cyberpunk' ? 'bg-cyan-400 text-black neon-text border-2 border-pink-500 hover:bg-pink-500 hover:text-cyan-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                        onClick={handleSubmit}
                    >Submit</button>
                </div>
                {theme === 'cyberpunk' && (
                    <div className="absolute top-2 right-4 text-xs text-pink-300 font-bold tracking-widest animate-pulse">
                        CYBER ✦ NOTE
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default NoteModal;

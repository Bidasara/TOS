import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useProblemContext } from '../../contexts/ProblemContext';
import { useState } from 'react';

const NoteModal = ({ isOpen, onClose,refetch }) => {
    const ref = useRef(null);
    const { theme } = useTheme();
    const { updateProblemStatus, noteModalContent, updateNotes } = useProblemContext();
    const [hints, setHints] = useState([]);
    useEffect(() => {
        if (isOpen && ref.current) {
            ref.current.innerText = noteModalContent.initialText || '-';
            setHints((noteModalContent?.hints || '').split(','))
        }
    }, [isOpen, noteModalContent]);

    if (!isOpen) return null;

    function handleAdd(hint) {
        if (ref.current) {
            // Get the current text and trim any leading/trailing whitespace
            const currentText = ref.current.innerText.trim();
            let newText;

            // If the textarea is empty, just add the hint
            if (currentText === '' || currentText.slice(-2) === '- ' || currentText.slice(-1) === '-') {
                newText = `${currentText} ${hint.trim()}\n- `;
            } else {
                // Otherwise, add the hint on a new line with a bullet point
                newText = `${currentText}\n- ${hint.trim()}\n- `;
            }

            // Set the new text to the contentEditable div
            ref.current.innerText = newText;

            const range = document.createRange();
            const selection = window.getSelection();

            // Check if there are any child nodes in the contentEditable div
            if (ref.current.childNodes.length > 0) {
                // Set the cursor position to the end of the last text node
                const lastNode = ref.current.childNodes[ref.current.childNodes.length - 1];
                range.setStart(lastNode, lastNode.length);
                range.collapse(true);

                // Remove any existing selections and add the new one
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }

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

    const handleUpdate = async() => {
        if (ref.current && refetch) {
            const { listId, categoryId, problemId } = noteModalContent;
            try{
                await updateNotes(listId, categoryId, problemId, ref.current.innerText);
                refetch();
                onClose();
            }
            catch(error){
                console.error("Failed to update note:",error);
            }
        }
    }

    const handleSubmit = (e) => {
        if (ref.current) {
            const { listId, categoryId, problemId } = noteModalContent;
            if (e.target.innerText === 'Revise')
                updateProblemStatus(listId, categoryId, problemId, ref.current.innerText, true);
            else
                updateProblemStatus(listId, categoryId, problemId, ref.current.innerText, false);
            onClose();
        }
    };
    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return ReactDOM.createPortal(
        <div
            className={`z-10 fixed inset-0 flex items-center h-full justify-center p-4 sm:p-8 transition-all duration-300 backdrop-blur-md
                ${theme === 'cyberpunk'
                    ? 'bg-black/80'
                    : 'bg-black/30'}
            `}
            onClick={handleClose}
        >
            <div
                className={` relative w-full h-2/3 max-w-lg mx-auto rounded-xl shadow-2xl border-4 p-6 sm:p-8 flex flex-col
                    ${theme === 'cyberpunk'
                        ? 'border-pink-500 bg-black cyberpunk-bg neon-text'
                        : 'border-gray-500 bg-gray-100'}
                `}
            >
                <h2
                    className={`text-3xl font-bold h-1/7 mb-4 text-center ${theme === 'cyberpunk'
                        ? 'text-cyan-400 neon-text drop-shadow-cyber'
                        : 'text-black'}
                    `}
                >
                    Notes
                </h2>
                {hints[0] != "" && (

                    <div className='m-3 w-11/12 h-1/5 overflow-x-scroll scroll-smooth flex flex-nowrap'>
                        {hints[0] != "" && hints?.map((hint) => {
                            return (
                                <span onClick={() => {
                                    handleAdd(hint)
                                }
                                } className='flex-shrink-0 cursor-pointer hover:bg-gray-400 duration-75 transition-all shadow-xl hover:shadow-blue-500 hover:shadow-2xl bg-gray-200 rounded-xs p-1 m-1 text-black border-1 border-blue-400'>{hint}</span>
                            )
                        })}
                    </div>
                )
                }
                <div
                    ref={ref}
                    contentEditable
                    onKeyDown={handleKeyDown}
                    suppressContentEditableWarning
                    placeholder="- Start your Notes..."
                    className={`w-full h-4/7 p-4 rounded-lg font-mono text-lg border-2 overflow-y-auto resize-y
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
                {
                    noteModalContent.update ?
                        (
                            <div className='flex flex-col h-1/7 sm:flex-row justify-end gap-3 mt-6'>
                                <button
                                    className={`py-2 px-4 rounded-lg font-semibold transition-all 
                                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-red-400 text-white hover:bg-red-600'}`}
                                    onClick={handleUpdate}
                                >Update</button>
                            </div>
                        ) :
                        (
                            <div className='flex flex-col h-1/7 sm:flex-row justify-end gap-3 mt-6'>
                                <button
                                    className={`py-2 px-4 rounded-lg font-semibold
                                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-red-400 text-white hover:bg-red-600'}`}
                                    onClick={handleSubmit}
                                >Don't need to Revise</button>
                                <button
                                    className={`py-2 px-4 rounded-lg font-semibold 
                                    ${theme === 'cyberpunk' ? 'bg-cyan-400 text-black neon-text border-2 border-pink-500 hover:bg-pink-500 hover:text-cyan-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                    onClick={handleSubmit}
                                >Revise</button>
                            </div>
                        )
                }
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

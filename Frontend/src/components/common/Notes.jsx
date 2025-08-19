import React, { useRef, useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';

// Custom Hooks
import { useTheme } from '../../contexts/ThemeContext';
import { useProblemContext } from '../../contexts/ProblemContext';
import { useNoteModal } from '../../contexts/NoteModalContext';
import { useReviseData } from '../../hooks/useReviseData';

//==============================================================================
// Note Modal Component
//==============================================================================
const NoteModal = () => {
  // Relook - refetch use here?
  //----------------------------------------------------------------------------
  // HOOKS
  //----------------------------------------------------------------------------
  const editorRef = useRef(null); // Ref for the contentEditable div
  const { theme } = useTheme();
  const { updateProblemStatus } = useProblemContext();
  const { noteModalContent,noteModalOpen,setNoteModalOpen,updateNotes } = useNoteModal();
  const [hints, setHints] = useState([]);
  const  { refetch} = useReviseData("lists")
  
  //----------------------------------------------------------------------------
  // EFFECTS
  //----------------------------------------------------------------------------

  // Effect to initialize the editor's text and hints when the modal opens
  useEffect(() => {
    if (noteModalOpen && editorRef.current) {
      // Set the initial text from the context data
      editorRef.current.innerText = noteModalContent?.initialText || '- ';
      
      // Safely parse hints from a comma-separated string
      const hintData = noteModalContent?.hints || '';
      setHints(hintData ? hintData.split(',') : []);
      
      editorRef.current.focus();

        // Create a new range
        const range = document.createRange();
        // Get the browser's selection object
        const selection = window.getSelection();

        // Select all the content of the editor
        range.selectNodeContents(editorRef.current);
        // Collapse the range to the end point. 
        // 'false' means collapse to end, 'true' to start.
        range.collapse(false);

        // Remove any existing selections
        selection.removeAllRanges();
        // Add the new, collapsed range, which effectively places the cursor at the end
        selection.addRange(range);
    }
  }, [noteModalOpen, noteModalContent]);

  //----------------------------------------------------------------------------
  // EVENT HANDLERS & LOGIC
  //----------------------------------------------------------------------------
  const { listId, categoryId, problemId, update } = useMemo(
    () => noteModalContent || {}, 
    [noteModalContent]
  );
  
  // Closes the modal if the user clicks on the backdrop overlay
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setNoteModalOpen(false);
    }
  };
  
  // Handles keyboard shortcuts for rich text editing
  const handleKeyDown = (e) => {
    // Handle Enter for automatic bullet points
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.execCommand('insertHTML', false, '<br>- ');
    }

    // --- ⚠️ DEPRECATION WARNING ---
    // `document.execCommand` is deprecated and no longer recommended. It has inconsistent
    // behavior across browsers and is not part of any modern web standard.
    // For a robust solution, consider replacing this contentEditable div with a dedicated
    // rich text editor library like `React Quill`, `Slate.js`, or `TipTap`.
    if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      document.execCommand('bold');
    }
    if (e.key === 'u' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      document.execCommand('underline');
    }
  };

  // Appends a hint to the notes area
  const handleAddHint = (e,hint) => {
    e.preventDefault(); 
    if (editorRef.current) {
        document.execCommand('insertHTML', false, `${hint.trim()}<br>- `);
    }
  };

  // Handler for submitting notes for an existing problem
  const handleUpdateNote = async () => {
    if (editorRef.current && refetch) {
      try {
        await updateNotes(listId, categoryId, problemId, editorRef.current.innerText);
        refetch();
      } catch (error) {
        console.error("Failed to update note:", error);
      }
    }
  };

  // IMPROVEMENT: Using specific handlers is more robust than checking button text.
  // The original `handleSubmit` checked `e.target.innerText`, which is brittle.
  // If the button text ever changes, the logic breaks. These specific handlers are better.
  const handleSubmitToRevise = () => {
    if (editorRef.current) {
      updateProblemStatus(listId, categoryId, problemId, editorRef.current.innerText, true);
      setNoteModalOpen(false);
    }
  };
  
  const handleSubmitWithoutRevise = () => {
    if (editorRef.current) {
      updateProblemStatus(listId, categoryId, problemId, editorRef.current.innerText, false);
      setNoteModalOpen(false);
    }
  };

  //----------------------------------------------------------------------------
  // RENDER LOGIC
  //----------------------------------------------------------------------------
  
  if (!noteModalOpen) return null; // Render nothing if the modal is not open

  // IMPROVEMENT: Extracted complex classes into variables for much better readability.
  const backdropClass = `z-10 fixed inset-0 flex items-center h-full justify-center p-4 sm:p-8 transition-all duration-300 backdrop-blur-md ${theme === 'cyberpunk' ? 'bg-black/80' : 'bg-black/30'}`;
  const modalContainerClass = `relative w-full h-2/3 max-w-lg mx-auto rounded-xl shadow-2xl border-4 p-6 sm:p-8 flex flex-col ${theme === 'cyberpunk' ? 'border-pink-500 bg-black cyberpunk-bg neon-text' : 'border-gray-500 bg-gray-100'}`;
  const titleClass = `text-3xl font-bold h-1/7 mb-4 text-center ${theme === 'cyberpunk' ? 'text-cyan-400 neon-text drop-shadow-cyber' : 'text-black'}`;
  const editorClass = `w-full h-4/7 p-4 rounded-lg font-mono text-lg border-2 overflow-y-auto resize-y ${theme === 'cyberpunk' ? 'bg-black bg-opacity-80 text-pink-400 border-cyan-400 focus:outline-none focus:ring-2 shadow-cyber focus:ring-pink-500 cyberpunk-textarea' : 'bg-white bg-opacity-80 text-black border-blue-700'}`;
  const hintClass = 'flex-shrink-0 cursor-pointer hover:bg-gray-400 duration-75 transition-all shadow-xl hover:shadow-blue-500 hover:shadow-2xl bg-gray-200 rounded-xs p-1 m-1 text-black border-1 border-blue-400';
  const buttonClassPrimary = `py-2 px-4 rounded-lg font-semibold transition-all ${theme === 'cyberpunk' ? 'bg-cyan-400 text-black neon-text border-2 border-pink-500 hover:bg-pink-500 hover:text-cyan-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`;
  const buttonClassSecondary = `py-2 px-4 rounded-lg font-semibold transition-all ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-red-400 text-white hover:bg-red-600'}`;
  
  //----------------------------------------------------------------------------
  // RENDER
  //----------------------------------------------------------------------------

  return ReactDOM.createPortal(
    <div className={backdropClass} onClick={handleBackdropClick}>
      <div className={modalContainerClass}>
        <h2 className={titleClass}>Notes</h2>
        
        {/* IMPROVEMENT: Simplified conditional rendering for hints. */}
        {hints.length > 0 && (
          <div className='m-3 w-11/12 h-1/5 overflow-x-scroll scroll-smooth flex flex-nowrap'>
            {hints.map((hint, index) => (
              <span key={index} onMouseDown={(e)=> handleAddHint(e,hint)} className={hintClass}>
                {hint}
              </span>
            ))}
          </div>
        )}

        <div
          ref={editorRef}
          contentEditable
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning
          className={editorClass}
          style={{ whiteSpace: 'pre-wrap' }}
        ></div>

        <div className='flex flex-col h-1/7 sm:flex-row justify-end gap-3 mt-6'>
          {update ? (
            <button className={buttonClassPrimary} onClick={handleUpdateNote}>
              Update Note
            </button>
          ) : (
            <>
              <button className={buttonClassSecondary} onClick={handleSubmitWithoutRevise}>
                Don't need to Revise
              </button>
              <button className={buttonClassPrimary} onClick={handleSubmitToRevise}>
                Revise
              </button>
            </>
          )}
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

export default React.memo(NoteModal);
import React, { useEffect, useRef, useState } from 'react';
import { useProblemContext } from '../../contexts/ProblemContext';
import Input from './Input';

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  size = "md",
  extra
}) => {
  const modalRef = useRef();
  const {
    inputLabel, inputId, inputPlaceHolder, onChange, modalExtra, addCategory, func, addProblem,onQueryChange
  } = useProblemContext();
  let currFunc = addCategory;
  if (func === 'problem')
    currFunc = addProblem;
  const { problems } = useProblemContext();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  useEffect(() => {
    if (!problems) return;
    if (query.length == 0 || query === "" || !showSuggestions)
      setSuggestions([]);
    setSuggestions(
      problems.filter(
        p => p.title.toLowerCase().includes(query?.toLowerCase()) || String(p.num).includes(query)
      ).slice(0, 5)
    )
    onQueryChange(query);
  }, [query, problems, showSuggestions]);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-md transition-opacity">
      <div
        ref={modalRef}
        className={`${sizeClasses[size]} w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all animate-fadeIn`}
      >
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>

        <div className="p-6">
          <Input
            label={inputLabel}
            id={inputId}
            type="text"
            placeholder={inputPlaceHolder}
            value={query}
            onChange={(e) => {
              setShowSuggestions(true);
              setQuery(e.target.value);
              onChange(e);
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') currFunc }}
            extra={modalExtra}
          />
          {showSuggestions && (
            <ul className='absolute bg-white border rounded shadow z-50'>
              {suggestions.map(s => (
                <li
                  key={s._id}
                  className="px-2 py-1 cursor-pointer hover:bg-indigo-100"
                  onClick={() => {
                    setShowSuggestions(false);
                    setQuery(String(s.num))
                  }
                  }
                >
                  {s.num}.  {s.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-lg flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm 
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors
                     dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow-sm 
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors
                     active:bg-indigo-800 active:transform active:scale-95
                     dark:bg-indigo-700 dark:hover:bg-indigo-600"
            onClick={() => onSubmit(extra)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

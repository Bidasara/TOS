import React from 'react';

const Input = ({ 
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyDown,
  autoFocus = true,
  fullWidth = false,
  extra
}) => {
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          id={id}
          className={`
            pl-3 block w-full py-2.5 pr-3 border border-gray-300 dark:border-gray-700 
            rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
          `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={()=>onKeyDown(extra)}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
};

export default Input;
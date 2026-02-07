import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, isDisabled, text, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold
        py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out
        hover:from-purple-600 hover:to-indigo-700 transform hover:-translate-y-1
        focus:outline-none focus:ring-4 focus:ring-purple-300
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:from-purple-500 disabled:hover:to-indigo-600
        ${className || ''}
      `}
    >
      {text}
    </button>
  );
};

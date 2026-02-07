import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8">
      <div className="relative flex h-12 w-12">
        {/* Outer ring */}
        <div className="absolute h-full w-full rounded-full border-4 border-t-4 border-gray-200 border-t-purple-500 animate-spin"></div>
        {/* Inner dot */}
        <div className="absolute h-4 w-4 rounded-full bg-indigo-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce-custom"></div>
      </div>
      <p className="text-lg text-gray-600 font-medium">Scanning the future...</p>
    </div>
  );
};

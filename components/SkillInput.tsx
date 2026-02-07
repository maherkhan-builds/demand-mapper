import React from 'react';

interface SkillInputProps {
  skillsInput: string;
  setSkillsInput: (skills: string) => void;
  isDisabled: boolean;
}

export const SkillInput: React.FC<SkillInputProps> = ({ skillsInput, setSkillsInput, isDisabled }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label htmlFor="skills-textarea" className="text-xl font-semibold mb-4 text-gray-700">
        What are your current or planned skills?
      </label>
      <textarea
        id="skills-textarea"
        className={`
          w-full p-4 border-2 border-gray-300 rounded-lg shadow-inner
          focus:ring-2 focus:ring-blue-400 focus:border-transparent
          transition-all duration-200 ease-in-out resize-y min-h-[150px] text-gray-800
          ${isDisabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
        placeholder="e.g., Python for data science, JavaScript with React, UI/UX design, digital marketing, public speaking..."
        value={skillsInput}
        onChange={(e) => setSkillsInput(e.target.value)}
        disabled={isDisabled}
      />
      <p className="text-sm text-gray-500 mt-2">
        Separate skills with commas or new lines for best results.
      </p>
    </div>
  );
};

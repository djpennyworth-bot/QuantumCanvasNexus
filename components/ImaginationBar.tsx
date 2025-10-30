import React, { useState } from 'react';

interface ImaginationBarProps {
  onPromptSubmit: (prompt: string) => void;
  isLoading: boolean;
  isCanvasActive: boolean;
}

const ImaginationBar: React.FC<ImaginationBarProps> = ({ onPromptSubmit, isLoading, isCanvasActive }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading && isCanvasActive) {
      onPromptSubmit(prompt);
      setPrompt('');
    }
  };

  const isDisabled = isLoading || !isCanvasActive;

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={isCanvasActive ? "Input your Prophecy..." : "Select a Canvas to activate."}
        disabled={isDisabled}
        className="w-full bg-gray-800/50 border border-fuchsia-500/50 rounded-lg pl-4 pr-28 py-3 text-lg text-sky-200 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      />
      <button
        type="submit"
        disabled={isDisabled}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-md text-fuchsia-300 font-bold bg-gray-900/50 border border-fuchsia-500/50 hover:bg-fuchsia-500/30 hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <span>Actualize</span>
        )}
      </button>
    </form>
  );
};

export default ImaginationBar;

import React from 'react';
import { Canvas } from '../types';
import CanvasCard from './CanvasCard';

interface CanvasGridProps {
  canvases: Canvas[];
  onCanvasSelect: (canvas: Canvas) => void;
  activeCanvasId?: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CanvasGrid: React.FC<CanvasGridProps> = ({ canvases, onCanvasSelect, activeCanvasId, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col h-full bg-gray-800/20 border border-sky-500/30 rounded-lg p-2 overflow-hidden">
      <h2 className="text-lg font-bold text-center text-fuchsia-400 mb-2 flex-shrink-0">Quantum Canvases</h2>
      <div className="mb-2 flex-shrink-0">
        <input
          type="text"
          placeholder="Search Canvases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900/50 border border-sky-400/50 rounded-md px-3 py-2 text-sky-300 placeholder-sky-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
      </div>
      <div className="flex-grow overflow-y-auto pr-1">
        <div className="grid grid-cols-1 gap-2">
          {canvases.map(canvas => (
            <CanvasCard 
              key={canvas.id} 
              canvas={canvas} 
              onSelect={onCanvasSelect}
              isActive={canvas.id === activeCanvasId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanvasGrid;

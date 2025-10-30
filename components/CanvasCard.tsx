
import React from 'react';
import { Canvas } from '../types';

interface CanvasCardProps {
  canvas: Canvas;
  onSelect: (canvas: Canvas) => void;
  isActive: boolean;
}

const CanvasCard: React.FC<CanvasCardProps> = ({ canvas, onSelect, isActive }) => {
  const baseClasses = "flex items-center p-2 rounded-md cursor-pointer transition-all duration-300 border";
  const activeClasses = "bg-sky-500/30 border-sky-400 holographic-glow";
  const inactiveClasses = "bg-gray-700/20 border-gray-600 hover:bg-sky-500/20 hover:border-sky-500";
  
  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => onSelect(canvas)}>
      <div className="flex-shrink-0 mr-3">{canvas.icon}</div>
      <div>
        <h3 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-sky-300'}`}>{canvas.name}</h3>
        <p className={`text-xs ${isActive ? 'text-sky-200' : 'text-sky-500'}`}>{canvas.id}</p>
      </div>
    </div>
  );
};

export default CanvasCard;

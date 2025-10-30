import React from 'react';
import { Canvas } from '../../types';
import { XCircleIcon } from '@heroicons/react/24/solid';

interface GenericCanvasViewProps {
  canvas: Canvas;
  isLoading: boolean;
  response: string;
  error: string;
  onClearCanvas: () => void;
}

const GenericCanvasView: React.FC<GenericCanvasViewProps> = ({ canvas, isLoading, response, error, onClearCanvas }) => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-fuchsia-500/30 flex-shrink-0">
        <div className="flex items-center">
          <div className="mr-4">{React.cloneElement(canvas.icon, { className: "h-10 w-10 text-fuchsia-400" })}</div>
          <div>
            <h2 className="text-2xl font-bold text-fuchsia-400">{canvas.name}</h2>
            <p className="text-sm text-sky-400">{canvas.id} | <span className="italic">{canvas.description}</span></p>
          </div>
        </div>
        <button onClick={onClearCanvas} className="p-1 rounded-full text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors">
          <XCircleIcon className="h-8 w-8"/>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full text-center">
             <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-sky-400"></div>
            <p className="mt-4 text-xl text-sky-300">Actualizing Timeline...</p>
            <p className="text-sm text-sky-500">Engaging with {canvas.name}</p>
          </div>
        )}
        {error && (
            <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
                <p className="font-bold text-lg text-red-200">Unresolved Duality</p>
                <p>{error}</p>
            </div>
        )}
        {response && (
          <div>
            <div className="text-center mb-4 border border-green-500/30 bg-green-900/20 p-2 rounded-lg">
              <p className="text-green-400 font-bold tracking-widest text-md">TIMELINE ACTUALIZED</p>
              <p className="text-xs text-green-500">Jehovah's Glory Manifested.</p>
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-sky-300 prose-headings:text-fuchsia-400 prose-strong:text-sky-100 prose-code:text-green-400 prose-a:text-cyan-400">
               <div className="whitespace-pre-wrap bg-black/20 p-4 rounded-md font-mono text-sm">{response}</div>
            </div>
          </div>
        )}
         {!isLoading && !response && !error && (
             <div className="flex flex-col items-center justify-center h-full text-center text-sky-500 p-4">
                <div className="h-16 w-16">{React.cloneElement(canvas.icon, { className: "h-full w-full opacity-50" })}</div>
                <p className="mt-4 text-xl font-semibold text-sky-300">Canvas Initialized</p>
                <p className="mt-2 max-w-md">Input your Prophecy below to interact with the {canvas.name}.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default GenericCanvasView;
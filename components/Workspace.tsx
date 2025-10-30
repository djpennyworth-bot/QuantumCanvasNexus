
import React from 'react';
import { Canvas } from '../types';
import DefaultWorkspaceView from './canvasViews/DefaultWorkspaceView';
import GenericCanvasView from './canvasViews/GenericCanvasView';

interface WorkspaceProps {
  activeCanvas: Canvas | null;
  isLoading: boolean;
  response: string;
  error: string;
  onClearCanvas: () => void;
}

const Workspace: React.FC<WorkspaceProps> = ({ activeCanvas, isLoading, response, error, onClearCanvas }) => {
  return (
    <div className="flex-grow bg-gray-800/20 border border-sky-500/30 rounded-lg p-4 flex flex-col h-full overflow-hidden relative">
        {activeCanvas ? (
            <GenericCanvasView 
                canvas={activeCanvas}
                isLoading={isLoading}
                response={response}
                error={error}
                onClearCanvas={onClearCanvas}
            />
        ) : (
            <DefaultWorkspaceView />
        )}
    </div>
  );
};

export default Workspace;

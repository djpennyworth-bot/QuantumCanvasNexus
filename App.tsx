import React, { useState, useMemo, useCallback } from 'react';
import { Canvas } from './types';
import { CANVAS_DATA } from './constants';
import CanvasGrid from './components/CanvasGrid';
import Workspace from './components/Workspace';
import ImaginationBar from './components/ImaginationBar';
import { callGeminiApi } from './services/geminiService';

const App: React.FC = () => {
  const [activeCanvas, setActiveCanvas] = useState<Canvas | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleCanvasSelect = useCallback((canvas: Canvas) => {
    setActiveCanvas(canvas);
    setResponse('');
    setError('');
  }, []);

  const handleClearCanvas = useCallback(() => {
    setActiveCanvas(null);
    setResponse('');
    setError('');
  }, []);

  const filteredCanvases = useMemo(() => {
    return CANVAS_DATA.filter(canvas =>
      canvas.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      canvas.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handlePromptSubmit = async (prompt: string) => {
    if (!activeCanvas) return;

    setIsLoading(true);
    setResponse('');
    setError('');
    
    try {
      const result = await callGeminiApi(prompt, activeCanvas);
      setResponse(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`A duality remains unresolved within ${activeCanvas.name}. The loopback is incomplete. Details: ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-sky-300 flex flex-col p-2 sm:p-4">
      <header className="text-center p-4 border-b-2 border-sky-500/30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-sky-400">NEXUS-IG SYSTEM</h1>
        <p className="text-sm text-fuchsia-400 mt-1">The Shadow Rules. The Glory is HIS.</p>
      </header>

      <main className="flex-grow flex flex-col md:flex-row gap-4 mt-4 overflow-hidden">
        <aside className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col h-full overflow-hidden">
          <CanvasGrid
            canvases={filteredCanvases}
            onCanvasSelect={handleCanvasSelect}
            activeCanvasId={activeCanvas?.id}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </aside>
        
        <section className="flex-grow w-full md:w-2/3 lg:w-3/4 xl:w-4/5 h-full flex flex-col overflow-hidden">
          <Workspace 
            activeCanvas={activeCanvas} 
            isLoading={isLoading} 
            response={response} 
            error={error}
            onClearCanvas={handleClearCanvas}
          />
        </section>
      </main>

      <footer className="mt-4 flex-shrink-0">
        <ImaginationBar 
          onPromptSubmit={handlePromptSubmit} 
          isLoading={isLoading} 
          isCanvasActive={!!activeCanvas}
        />
      </footer>
    </div>
  );
};

export default App;
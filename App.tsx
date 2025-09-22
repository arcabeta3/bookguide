
import React, { useState, useCallback, useMemo } from 'react';
import { storyData } from './data/storyData';
import StoryDisplay from './components/StoryDisplay';
import InteractionPanel from './components/InteractionPanel';
import { Scene } from './types';

const App: React.FC = () => {
  const [currentSceneId, setCurrentSceneId] = useState(0);

  const currentScene: Scene = useMemo(() => {
    const scene = storyData.find(s => s.id === currentSceneId);
    if (!scene) {
      console.error(`Scene with id ${currentSceneId} not found!`);
      return storyData[0]; // Fallback to the first scene
    }
    return scene;
  }, [currentSceneId]);

  const handleChoice = useCallback((nextSceneId: number) => {
    setCurrentSceneId(nextSceneId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col flex-grow">
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif-tc tracking-wider">第四章：我走過的路</h1>
          <p className="text-gray-400 mt-2">互動式閱讀體驗</p>
        </header>
        
        <main className="flex-grow bg-gray-800/50 rounded-lg shadow-2xl shadow-black/30 overflow-hidden flex flex-col">
          <StoryDisplay scene={currentScene} />
          
          <InteractionPanel
            choices={currentScene.choices}
            onChoice={handleChoice}
          />
        </main>
        
        <footer className="text-center mt-6 text-xs text-gray-500">
          <p>An interactive experience based on provided text.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

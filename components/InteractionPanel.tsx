
import React from 'react';
import { Choice } from '../types';

interface InteractionPanelProps {
  choices: Choice[] | undefined;
  onChoice: (nextSceneId: number) => void;
}

const InteractionPanel: React.FC<InteractionPanelProps> = ({
  choices,
  onChoice,
}) => {
  return (
    <div className="bg-black/30 p-4 sm:p-6 border-t border-gray-700">
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {choices?.map((choice) => (
          <button
            key={choice.text + choice.nextSceneId}
            onClick={() => onChoice(choice.nextSceneId)}
            className={`font-bold py-2 px-5 rounded-md transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
              choice.nextSceneId === 0 ? 'bg-amber-600 hover:bg-amber-500 text-white focus:ring-amber-500' : 'bg-sky-700 hover:bg-sky-600 text-sky-100 focus:ring-sky-500'
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractionPanel;

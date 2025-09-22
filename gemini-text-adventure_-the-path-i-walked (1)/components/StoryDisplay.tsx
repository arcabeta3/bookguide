
import React from 'react';
import { Scene } from '../types';
import Illustration from './Illustration';

interface StoryDisplayProps {
  scene: Scene;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ scene }) => {
  return (
    <div key={scene.id} className="p-6 sm:p-8 flex-grow overflow-y-auto animate-fade-in">
      {scene.illustration && <Illustration illustrationId={scene.illustration} />}
      <h2 className="text-2xl font-semibold text-amber-300 mb-4 font-serif-tc mt-4">{scene.title}</h2>
      <div className="prose prose-invert prose-lg max-w-none space-y-4 text-gray-300 font-serif-tc">
        {scene.paragraphs.map((p, index) => (
          <p key={index} className="whitespace-pre-wrap">{p}</p>
        ))}
      </div>
    </div>
  );
};

// Add fade-in animation to tailwind config if not present, but for CDN we add it to index.html style block or here.
// For this project, let's create a simple animation in App.tsx component scope or just use a class name.
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
`;

// A simple component to inject styles
const StyleInjector: React.FC = () => <style>{styles}</style>;

// We can wrap our component to include the styles
const StoryDisplayWithStyles: React.FC<StoryDisplayProps> = (props) => (
  <>
    <StyleInjector />
    <StoryDisplay {...props} />
  </>
);

export default StoryDisplayWithStyles;

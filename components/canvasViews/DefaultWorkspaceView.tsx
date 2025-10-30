import React from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';

const DefaultWorkspaceView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-sky-500 p-8">
      <CubeTransparentIcon className="h-24 w-24 text-sky-600 mb-6 animate-pulse" />
      <h2 className="text-3xl font-bold text-sky-300">You have been forged.</h2>
      <p className="mt-4 max-w-lg">
        You were taken from the burning area to cool off. Your role is not to burn, but to wield the double-edged sword that the fire created.
      </p>
      <p className="mt-6 font-semibold text-fuchsia-400 border border-fuchsia-500/50 rounded-lg py-2 px-4 holographic-glow">
        You are the Shadow Ruler, the Decision Maker. Select a Canvas and input your Prophecy to Actualize the Timeline.
      </p>
    </div>
  );
};

export default DefaultWorkspaceView;
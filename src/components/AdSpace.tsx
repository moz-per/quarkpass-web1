
import React from 'react';

interface AdSpaceProps {
  id: string;
  size: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ id, size, className = '' }) => {
  const sizeClasses = {
    banner: 'w-full h-24 sm:h-32', // 728x90 or 320x50
    rectangle: 'w-full h-64', // 300x250
    leaderboard: 'w-full h-24', // 728x90
    skyscraper: 'w-40 h-96' // 160x600
  };

  return (
    <div 
      id={id}
      className={`${sizeClasses[size]} ${className} bg-slate-800/30 border border-slate-700 rounded-lg flex items-center justify-center`}
      aria-label="Advertisement space"
      role="complementary"
    >
      <div className="text-slate-500 text-sm text-center">
        <div className="opacity-50">Advertisement Space</div>
        <div className="text-xs mt-1">{size}</div>
      </div>
    </div>
  );
};

export default AdSpace;
